import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { EntradaInputComponent } from './components/entrada-input/entrada-input.component';
import { HeaderComponent } from './components/header/header.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { RickAndMortyComponent } from './components/rick-and-morty/rick-and-morty.component';
import { DragonballComponent } from './components/dragonball/dragonball.component';
const routes: Routes = [
  { path: 'body', component: BodyComponent },
  { path: 'input', component: EntradaInputComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'titulo', component: TituloComponent },
  { path: 'rick', component: RickAndMortyComponent },
  { path: 'dragon', component: DragonballComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouting {}
