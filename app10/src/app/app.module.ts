import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ElencoAtletiComponent } from './atleti/elenco-atleti/elenco-atleti.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NuovoAtletaComponent } from './atleti/nuovo-atleta/nuovo-atleta.component';
import { RouterModule } from '@angular/router';
import { DettaglioAtletaComponent } from './atleti/dettaglio-atleta/dettaglio-atleta.component';
import { ModificaAtletiComponent } from './atleti/modifica-atleti/modifica-atleti.component';

@NgModule({
  declarations: [
    AppComponent,
    ElencoAtletiComponent,
    NavbarComponent,
    NuovoAtletaComponent,
    DettaglioAtletaComponent,
    ModificaAtletiComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'atleti',
        component: ElencoAtletiComponent
      },
      {
        path:'inserisci',
        component: NuovoAtletaComponent
      },
      {
        path:'atleti/:id',
        component: DettaglioAtletaComponent
      },
      {
        path:'atleti/:id/modifica',
        component: ModificaAtletiComponent
      },
      {
        path:'',
        redirectTo:'atleti',
        pathMatch: 'full'
      },
      {
        path:'**',
        redirectTo: 'atleti',
        pathMatch:'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
