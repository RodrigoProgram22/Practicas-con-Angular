import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './components/login/login.component';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { EntradaInputComponent } from './components/entrada-input/entrada-input.component';

import { HttpClientModule } from '@angular/common/http';

import { AppRouting } from './app-routing.module';
import { BodyComponent } from './components/body/body.component';
import { RickAndMortyComponent } from './components/rick-and-morty/rick-and-morty.component';
import { DragonballComponent } from './components/dragonball/dragonball.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TituloComponent,
    EntradaInputComponent,
    BodyComponent,
    RickAndMortyComponent,
    DragonballComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRouting,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
