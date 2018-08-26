import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'montoSoberano'
})
export class MontoSoberanoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const monto = value ? (value / 100000) : 0;
    return monto;
  }

}
