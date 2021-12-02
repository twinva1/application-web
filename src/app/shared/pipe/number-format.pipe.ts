import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat',
})
export class NumberFormatPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    if (typeof value !== 'number') return value;
    let numString = '' + value;
    let result = '';

    while (numString.length > 3) {
      result = `,${numString.slice(-3)}` + result;
      numString = numString.slice(0, numString.length - 3);
    }
    if (numString) result = numString + result;
    return result;
  }
}
