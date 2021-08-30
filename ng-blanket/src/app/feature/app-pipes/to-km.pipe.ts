import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toKm'
})
export class ToKmPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    console.log('value: ', value)

    return value ? value * 1.60934 : '';
  }

}
