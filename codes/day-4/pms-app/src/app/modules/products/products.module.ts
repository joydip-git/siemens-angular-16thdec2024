import { EnvironmentProviders, NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { FormsModule } from '@angular/forms';
import { FilterProductComponent } from './components/filter-product/filter-product.component';
import { ProductContainerComponent } from './components/product-container/product-container.component';
import { ProductService } from './services/product.service';
import { SERVICE_TOKEN, SERVICE_TYPE } from '../../utils/constants';
import { provideHttpClient } from '@angular/common/http';
import { provideProductService } from '../../utils/provideproductservice';

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
  ],
  providers: [
    //ProductService
    // {
    //   provide: ProductService,
    //   useClass: ProductService
    // }
    // {
    //   provide: SERVICE_TOKEN,
    //   useClass: SERVICE_TYPE
    // },
    provideProductService(),
    provideHttpClient()
  ]
})
export class ProductsModule {
}
