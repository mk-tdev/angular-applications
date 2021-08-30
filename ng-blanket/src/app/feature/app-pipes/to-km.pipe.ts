import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toKm'
})
export class ToKmPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number | string {
    const [targetUnit] = args;

    if (!value) return '';

    switch (targetUnit) {
      case 'km':
        return value * 1.60934;
      case 'm':
        return value * 1.60934 * 1000;
      case 'cm':
        return value * 1.60934 * 1000 * 1000;

      default:
        throw new Error('Target Unit not supported!')
    }
  }

}
