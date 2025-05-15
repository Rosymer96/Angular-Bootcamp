import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reserve',
})
export class ReservePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return value.split('').reverse().join('');
  }
}
