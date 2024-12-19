import { Component, Input } from '@angular/core';
import { Product } from '../../../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  //standalone: false
})
export class ProductListComponent {
  @Input('textToFilter') filterText = ''
  @Input() products: Product[] | undefined;

  // constructor() {
  //   this.products = []
  // }
}
