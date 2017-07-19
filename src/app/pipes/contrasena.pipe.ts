import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean): string {

    let respuesta:string = value;
    if(activar){
       respuesta = value.replace(/./g,"*");
     }

    return respuesta;
  }

}
