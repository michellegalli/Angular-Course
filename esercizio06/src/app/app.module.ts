import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecensioneComponent } from './recensione/recensione.component';
import { GestioneRecensioniComponent } from './gestione-recensioni/gestione-recensioni.component';

@NgModule({
  declarations: [
    AppComponent,
    RecensioneComponent,
    GestioneRecensioniComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
