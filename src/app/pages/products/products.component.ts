import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { Ipage } from '@app/shared/components/table/models/page.interface';
import { IconfigTable } from '@app/shared/components/table/models/configTable.interface';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '@app/shared/components/dialog/dialog.component';
import { EditComponent } from '@pages/products/edit/edit.component';
import {
  TypeViewUploadComponent,
  TypeDirectionUploadComponent,
} from '@shared/components/upload/models/typeUpload';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private productSvc: ProductsService, private dialog: MatDialog) {}

  dataProducts: any;
  typeViewUploadComponent = new TypeViewUploadComponent();
  typeDirectionUploadComponent = new TypeDirectionUploadComponent();

  public openDialog = (row: any) => {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '450px',
      data: {
        component: EditComponent,
        row: row,
      },
    });
    dialogRef.afterClosed().subscribe((resp) => {
      console.log(resp);
    });
  };

  configuration: IconfigTable = {
    displayedColumns: [
      'checkbox',
      'created_at',
      'description',
      'status',
      'updated_at',
      'editor_id',
      'action',
    ],

    columns: [
      {
        title: 'created',
        name: 'created_at',
        background: {
          value: '2022-01-23T19:17:52.757Z',
        },
      },
      {
        title: 'description',
        name: 'description',
        background: {
          value: 'Suculentas de color amariilo',
        },
      },
      {
        title: 'status',
        name: 'status',
        text: {
          value: 'active',
        },
      },
      {
        title: 'updated',
        name: 'updated_at',
        text: {
          value: '2022-01-23T19:15:36.701Z',
        },
      },
      {
        title: 'editor',
        name: 'editor_id',
        background: {
          greater_than: 14,
          small_than: 27,
        },
        text: {
          value: 'active',
        },
      },
      {
        title: 'action',
        name: 'action',
        button: [
          { text: 'editar', cssClass: 'bg-color-red', click: this.openDialog },
          { text: 'editar', cssClass: 'bg-color-red', click: this.openDialog },
        ],
      },
    ],
  };

  ngOnInit(): void {
    this.loadProducts();
  }

  mapRows = (data: any) => {
    data.forEach((element: any) => {
      element.cssClass =
        element.description === '4 gb ram '
          ? 'bg-color-yellow'
          : element.created_at === '2022-01-23T19:15:36.701Z'
          ? 'bg-color-black'
          : element.creator_id > 11
          ? 'bg-color-pink'
          : '';
    });
    data[1].editor_id = 'active';
    this.dataProducts = data;
  };

  loadProducts = () => {
    this.productSvc.products().subscribe((data) => {
      this.mapRows(data);
    });
  };

  refreshPage = (page: Ipage) => {
    console.log(page);
    this.loadProducts();
  };

  changeSelection = (selection: any) => {
    console.log(selection);
  };

  sortData = (sort: any) => {
    console.log(sort);
  };

  formDataUpload = (event: any) => {
    console.log(event);
  };
}
