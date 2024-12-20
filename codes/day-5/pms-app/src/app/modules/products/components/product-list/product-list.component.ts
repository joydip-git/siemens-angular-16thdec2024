import { Component, EventEmitter, Inject, inject, Input, OnDestroy, Output } from '@angular/core';
import { Product } from '../../../../models/product';
import { SERVICE_TOKEN } from '../../../../utils/constants';
import { ServiceContract } from '../../services/servicecontract';
import { Subscription } from 'rxjs';
import { ApiResponse } from '../../../../models/apiresponse';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input('textToFilter') filterText = ''
  @Input() products: Product[] | undefined;
  @Output() productSelected = new EventEmitter<number>()

  deleteRecord(id: number) {
    this.productSelected.emit(id)
  }
}
