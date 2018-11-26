import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre = 'Pablo';
  
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  pi = Math.PI;
  
  a:number = 0.234;
  
  salario  = 1234.5;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 'N 19'
    }
  };

  valorDePromesa = new Promise((res, rej) => {
    setTimeout(() => res('Llegó la data'), 1000);
  });

  // fecha = '2018-01-01';
  fecha = new Date();

  nombreCompleto = 'pAblo andrés lEMa sarmiento';

  video = 'fOk8Tm815lE';

  activar: boolean = true;

}
