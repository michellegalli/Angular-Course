import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './argomenti/container/container.component';
import { ColonneComponent } from './argomenti/colonne/colonne.component';
import { VisibilitaComponent } from './argomenti/visibilita/visibilita.component';
import { ColoreComponent } from './argomenti/colore/colore.component';
import { BordiComponent } from './argomenti/bordi/bordi.component';
import { AllineamentoComponent } from './argomenti/allineamento/allineamento.component';
import { SpaziatureComponent } from './argomenti/spaziature/spaziature.component';
import { DisposizioneComponent } from './argomenti/disposizione/disposizione.component';
import { ImmaginiComponent } from './argomenti/immagini/immagini.component';
import { TestComponent } from './argomenti/test/test.component';
import { TabelleComponent } from './argomenti/tabelle/tabelle.component';
import { CollegamentiComponent } from './argomenti/collegamenti/collegamenti.component';
import { BadgeComponent } from './argomenti/badge/badge.component';
import { ListeComponent } from './argomenti/liste/liste.component';
import { AlertComponent } from './argomenti/alert/alert.component';
import { CardComponent } from './argomenti/card/card.component';
import { ColonneAvanzateComponent } from './argomenti/colonne-avanzate/colonne-avanzate.component';
import { DropdownComponent } from './argomenti/dropdown/dropdown.component';
import { NavComponent } from './nav/nav.component';
import { NavbarComponent } from './argomenti/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ColonneComponent,
    VisibilitaComponent,
    ColoreComponent,
    BordiComponent,
    AllineamentoComponent,
    SpaziatureComponent,
    DisposizioneComponent,
    ImmaginiComponent,
    TestComponent,
    TabelleComponent,
    CollegamentiComponent,
    BadgeComponent,
    ListeComponent,
    AlertComponent,
    CardComponent,
    ColonneAvanzateComponent,
    DropdownComponent,
    NavComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
