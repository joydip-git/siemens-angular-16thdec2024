import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../../../models/product';
import { API_URL, SERVICE_TOKEN } from '../../../../utils/constants';
import { ServiceContract } from '../../services/servicecontract';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrl: './product-container.component.css',
  //providers:[ProductService]
})
export class ProductContainerComponent implements OnInit, OnDestroy {
  filterValue = ''
  isFetchComplete = false
  errorMessage = ''
  records?: Product[];
  private subscription?: Subscription;

  //constructor(private  ps: ProductService)

  //constructor(@Inject(SERVICE_TOKEN) private ps: ProductService) 

  constructor(@Inject(SERVICE_TOKEN) private ps: ServiceContract) {
    this.records = []
  }
  ngOnInit(): void {
    this.subscription =
      this.ps
        .getProducts()
        .subscribe({
          next: (response) => {
            if (response.data !== null) {
              this.records = response.data
              this.isFetchComplete = true
              this.errorMessage = ''
            } else {
              this.records = undefined
              this.isFetchComplete = true
              this.errorMessage = response.message
            }
          },
          error: (e) => {
            this.records = undefined
            this.isFetchComplete = true
            this.errorMessage = e.message
          }
        })
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
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
