import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrada-input',
  templateUrl: './entrada-input.component.html',
  styleUrls: ['./entrada-input.component.css'],
})
export class EntradaInputComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  nombre: string = '';
  telefono = '';
  dni = '';

  onClick() {
    alert('Hiciste click!!');
  }
}
