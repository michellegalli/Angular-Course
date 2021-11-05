import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElencoUtentiComponent } from './utenti/elenco-utenti/elenco-utenti.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ModificaComponent } from './utenti/modifica/modifica.component';
import { NuovoComponent } from './utenti/nuovo/nuovo.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ElencoUtentiComponent,
    NavbarComponent,
    ModificaComponent,
    NuovoComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
