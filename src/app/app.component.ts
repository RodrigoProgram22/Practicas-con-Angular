import { Component } from '@angular/core';
import { PersonajesService } from './services/personajes.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //  >Codigo para la API<
  personajes: any = [];
  constructor(private service: PersonajesService) {}
  ngOnInit(): void {
    this.service.getAllPersonajes().subscribe((resp) => {
      this.personajes = resp.results;
      // console.log(this.personajes);
    });
  }
}
