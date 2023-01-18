import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdInr'
})
export class UsdInrPipe implements PipeTransform {

  // transform(value: number, ...args: unknown[]): unknown {
    // return value*100;// frist or

    //or more type to converted inr to dollar second
    transform(value: number, ...args: number[]): unknown {
     const [x]=args

     return value*x 


  }

}
