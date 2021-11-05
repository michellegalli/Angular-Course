import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommentoComponent } from './gestione-commenti/commento/commento.component';
import { GestioneCommentiComponent } from './gestione-commenti/gestione-commenti.component';

@NgModule({
  declarations: [
    AppComponent,
    GestioneCommentiComponent,
    CommentoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
