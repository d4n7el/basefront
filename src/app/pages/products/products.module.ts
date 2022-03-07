import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { SharedModule } from '@app/shared/shared.module';
import { MaterialModule } from '@app/material.module';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [ProductsComponent, EditComponent],
  imports: [ProductsRoutingModule, SharedModule, MaterialModule, CommonModule],
  exports: [],
})
export class ProductsModule {}
