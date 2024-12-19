import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { FormsModule } from '@angular/forms';
import { FilterProductComponent } from './components/filter-product/filter-product.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductFilterPipe,
    FilterProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
