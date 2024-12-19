import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.component.html',
  styleUrl: './filter-product.component.css'
})
export class FilterProductComponent {
  filterText = ''
  @Output() filterTextChanged = new EventEmitter<string>()

  // x =new EventEmitter<Event>()

  changeFilterText(value: string) {
    this.filterText = value
    this.filterTextChanged.emit(this.filterText)
    // this.x.emit({})
  }
}
