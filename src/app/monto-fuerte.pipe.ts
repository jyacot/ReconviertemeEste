import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'montoFuerte'
})
export class MontoFuertePipe implements PipeTransform {

  transform(value: number, args?: any): number {
    const monto = value ? (value * 100000) : 0 ;
    return monto;
  }

}
