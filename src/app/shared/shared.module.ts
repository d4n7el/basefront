import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '@app/shared/components/table/table.component';
import { MaterialModule } from '@app/material.module';
import { DialogComponent } from './components/dialog/dialog.component';
import { HomeComponent } from '@app/pages/home/home.component';
import { UploadComponent } from './components/upload/upload.component';

@NgModule({
  declarations: [TableComponent, DialogComponent, UploadComponent],
  imports: [MaterialModule, CommonModule],
  exports: [TableComponent, MaterialModule, CommonModule, UploadComponent],
  entryComponents: [DialogComponent],
})
export class SharedModule {}
