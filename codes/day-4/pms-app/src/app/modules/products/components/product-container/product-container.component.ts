import { Component, Inject } from '@angular/core';
import { Product } from '../../../../models/product';
import { SERVICE_TOKEN } from '../../../../utils/constants';
import { ServiceContract } from '../../services/servicecontract';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrl: './product-container.component.css',
  //providers:[ProductService]
})
export class ProductContainerComponent {
  filterValue = ''
  records?: Product[];

  //constructor(private  ps: ProductService)

  //constructor(@Inject(SERVICE_TOKEN) private ps: ProductService) 

  constructor(@Inject(SERVICE_TOKEN) private ps: ServiceContract) {
    this.records = this.ps.getProducts()
  }

  updateFilterText(value: string) {
    this.filterValue = value
  }

  // deleteProduct(id: number) {
  //   const foundIndex = this.records.findIndex(p => p.productId === id)
  //   if (foundIndex !== -1) {
  //     this.records.splice(foundIndex, 1)
  //   }
  // }
}
