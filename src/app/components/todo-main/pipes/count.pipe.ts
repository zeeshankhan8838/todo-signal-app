import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'count'
})
export class CountPipe implements PipeTransform {

  transform(array: unknown): unknown {
    return  `<span class="item-count">${array}  item${array !== 1 ? 's' : '' } </span>`
  }

}
