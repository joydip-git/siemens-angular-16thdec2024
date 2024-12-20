import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { FormsModule } from '@angular/forms';
import { FilterProductComponent } from './components/filter-product/filter-product.component';
import { ProductContainerComponent } from './components/product-container/product-container.component';
import { provideHttpClient } from '@angular/common/http';
import { provideProductService } from '../../utils/provideproductservice';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductFilterPipe,
    FilterProductComponent,
    ProductContainerComponent,
    AddProductComponent,
    ViewProductComponent,
    UpdateProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule
  ],
  exports: [
    ProductContainerComponent
  ],
  providers: [
    provideProductService(),
    provideHttpClient()
  ]
})
export class ProductsModule {
}
