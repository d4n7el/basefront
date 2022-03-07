import {
  Component,
  OnInit,
  Inject,
  Injector,
  ReflectiveInjector,
  Injectable,
  ViewChild,
  ViewContainerRef,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Type,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { dataComponentOutlet } from '@app/utils/dataComponentOutletDefault';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  component!: Type<any>;
  injector!: Injector;

  constructor(
    private inj: Injector,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.component = this.data.component;
    this.injectData();
  }

  injectData = () => {
    this.injector = Injector.create(
      [
        {
          provide: dataComponentOutlet,
          useValue: new dataComponentOutlet(this.data),
        },
      ],
      this.inj
    );
  };

  handleOk = () => {};
  handleCancel = () => {
    this.dialogRef.close();
  };
}
