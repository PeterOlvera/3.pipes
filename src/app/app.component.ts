import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = "Peter ";
  PI = Math.PI;

  a:number = 0.234;

  salario = 1234.5;

  xmen={
    nombre:"Logan",
    clave:"wolverine",
    edad:500,
    direccion:{
      calle:"primera",
      casa:"19"
    }
  }


  valorDePromesa = new Promise( (resolve, reject)=>{
    setTimeout( ()=>resolve('llegó la data!'),3500 );
  } );

  fecha = new Date();

  nombreMal:string = "PeTeR olVera quiSILAY";

  video="9KQ2YKHzSNE";

  activar=true;
}
