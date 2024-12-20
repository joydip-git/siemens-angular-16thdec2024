import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../../../models/product';
import { SERVICE_TOKEN } from '../../../../utils/constants';
import { ServiceContract } from '../../services/servicecontract';
import { Subscription } from 'rxjs';
import { ApiResponse } from '../../../../models/apiresponse';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrl: './product-container.component.css'
})
export class ProductContainerComponent implements OnInit, OnDestroy {
  filterValue = ''
  isFetchComplete = false
  errorMessage = ''
  records?: Product[];
  private subscription?: Subscription;
  private deleteSubscription?: Subscription;
  private isDeleted = false

  constructor(@Inject(SERVICE_TOKEN) private ps: ServiceContract) {
    this.records = []
  }

  fetchRecords() {
    this.subscription =
      this.ps
        .getProducts()
        .subscribe({
          next: (response: ApiResponse<Product[]>) => {
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

  ngOnInit(): void {
    this.fetchRecords()
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
    this.deleteSubscription?.unsubscribe()
  }

  updateFilterText(value: string) {
    this.filterValue = value
  }

  removeProduct(id: number) {
    this.deleteSubscription =
      this.ps
        .deleteProduct(id)
        .subscribe({
          next: (response: ApiResponse<Product[]>) => {
            if (response.data !== null) {
              this.isDeleted = true
              alert('product deleted')
            } else {
              alert('could not delete product: ' + response.message)
            }
          },
          error: (e) => {
            alert(e.message)
          },
          complete: () => {
            //fetch fresh records from backend
            //this.fetchRecords()

            //or delete locally
            if (this.isDeleted) {
              const index = this.records?.findIndex(p => p.productId === id)
              if (index && index !== -1)
                this.records?.splice(index, 1)
            }
          }
        })
  }
}
