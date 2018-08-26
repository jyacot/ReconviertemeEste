import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'montovalido'
})
export class MontoValidoPipe implements PipeTransform {

  transform(value: any, args?: any): number {
    const monto = value ? value : 0;
    return monto;
  }

}
