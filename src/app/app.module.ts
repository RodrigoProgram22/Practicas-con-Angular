import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { EntradaInputComponent } from './components/entrada-input/entrada-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TituloComponent,
    EntradaInputComponent,
  ],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
