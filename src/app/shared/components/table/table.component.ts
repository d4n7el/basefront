import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipage } from '@app/shared/components/table/models/page.interface';
import { IconfigTable } from '@app/shared/components/table/models/configTable.interface';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() data: any = [];

  @Input() configuration: IconfigTable = {
    columns: [],
    displayedColumns: [],
  };
  @Output() page: EventEmitter<Ipage> = new EventEmitter();
  @Output() sort: EventEmitter<any> = new EventEmitter();
  @Output() selections: EventEmitter<any> = new EventEmitter();

  selection = new SelectionModel<any>(true, []);
  showCheckbox: boolean = false;

  constructor() {}

  public handlePage(e: any) {
    this.page.emit(e);
  }

  announceSortChange = (event: any) => {
    this.page.emit(event);
  };

  public clickInRow = (e: any) => {
    console.log(e);
  };

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      this.selections.emit(this.selection);
      return;
    }

    this.selection.select(...this.data);
    this.selections.emit(this.selection);
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }

  emitChangeCheckbox = (event: any, row: any) => {
    event ? this.selection.toggle(row) : null;
    this.selections.emit(this.selection);
  };

  ngOnInit(): void {
    this.showCheckbox =
      this.configuration &&
      this.configuration.displayedColumns &&
      this.configuration.displayedColumns.find((x: string) => x === 'checkbox')
        ? true
        : false;
    console.log(this.data.find((x: string) => x === 'checkbox'));
  }
}
