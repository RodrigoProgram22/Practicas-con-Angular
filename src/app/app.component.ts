import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'practicas-con-angular02';
  helloWord = () => {
    return 'Hola Mundo (desde una funcion)';
  };
  pi: number = 3.14159265359;
  numeros: number[] = [1, 2, 3, 4, 5];
  //Practica de la pagina de ArgPrograma
  armaduras = [
    'Mark I',
    'Mark II',
    'Mark III',
    'Mark IV',
    'Mark V',
    'Mark VI',
    'Mark XLII',
  ];
  ironman = 'Tony Stark';
  revelar_identidad = true; // cambiar por true
  usar = this.armaduras[2];
  superhero = 'Ironman';
}
