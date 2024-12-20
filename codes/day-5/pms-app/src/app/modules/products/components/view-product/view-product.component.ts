import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { SERVICE_TOKEN } from '../../../../utils/constants';
import { ServiceContract } from '../../services/servicecontract';
import { Subscription } from 'rxjs';
import { Product } from '../../../../models/product';
import { ApiResponse } from '../../../../models/apiresponse';

@Component({
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css'
})
export class ViewProductComponent implements OnInit, OnDestroy {

  private sub?: Subscription;

  isFetchComplete = false
  errorMessage = ''
  product?: Product;

  constructor(
    private route: ActivatedRoute,
    @Inject(SERVICE_TOKEN) private ps: ServiceContract,
    private router: Router
  ) {

  }
  update(id: number) {
    this.router.navigate(['/products', 'update', id])
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }

  ngOnInit(): void {
    const snapshot: ActivatedRouteSnapshot = this.route.snapshot
    //const id = +snapshot.params['id']
    //const id = Number(snapshot.params['id'])
    const id = parseInt(snapshot.params['id'])

    this.sub = this.ps.getProductById(id).subscribe(
      {
        next: (response: ApiResponse<Product>) => {
          if (response.data !== null) {
            this.product = response.data
            this.isFetchComplete = true
            this.errorMessage = ''
          } else {
            this.product = undefined
            this.isFetchComplete = true
            this.errorMessage = response.message
          }
        },
        error: (e) => {
          this.product = undefined
          this.isFetchComplete = true
          this.errorMessage = e.message
        }
      }
    )
  }
}
