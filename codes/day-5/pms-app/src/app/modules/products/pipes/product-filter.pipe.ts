import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../../models/product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
  transform(value: Product[], ...args: string[]): Product[] {
    console.log('in pipe ' + (args[0] === '' ? 'empty' : args[0]))
    if (value.length > 0 && args[0] !== '') {
      return value.filter(
        (p: Product) => p.productName.toLocaleLowerCase().includes(args[0].toLocaleLowerCase())
      )
    } else {
      return value
    }
  }
}
