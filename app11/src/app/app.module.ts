import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { ElencoRepartiComponent } from './reparti/elenco-reparti/elenco-reparti.component';
import { ElencoPazientiComponent } from './pazienti/elenco-pazienti/elenco-pazienti.component';
import { LoginHomeComponent } from './login/login-home/login-home.component';
import { PaginaErroreComponent } from './shared/pagina-errore/pagina-errore.component';
import { CardiologiaComponent } from './reparti/cardiologia/cardiologia.component';
import { OrtopediaComponent } from './reparti/ortopedia/ortopedia.component';
import { PsichiatriaComponent } from './reparti/psichiatria/psichiatria.component';
import { NuovoComponent } from './pazienti/nuovo/nuovo.component';
import { ModificaComponent } from './pazienti/modifica/modifica.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    ElencoRepartiComponent,
    ElencoPazientiComponent,
    LoginHomeComponent,
    PaginaErroreComponent,
    CardiologiaComponent,
    OrtopediaComponent,
    PsichiatriaComponent,
    NuovoComponent,
    ModificaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
