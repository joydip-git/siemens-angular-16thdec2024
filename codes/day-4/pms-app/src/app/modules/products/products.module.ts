import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { FormsModule } from '@angular/forms';
import { FilterProductComponent } from './components/filter-product/filter-product.component';
import { ProductContainerComponent } from './components/product-container/product-container.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductFilterPipe,
    FilterProductComponent,
    ProductContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ProductContainerComponent
  ]
})
export class ProductsModule { }
