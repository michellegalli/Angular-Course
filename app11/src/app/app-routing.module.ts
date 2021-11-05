import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './home/homepage/homepage.component';
import { LoginHomeComponent } from './login/login-home/login-home.component';
import { ElencoPazientiComponent } from './pazienti/elenco-pazienti/elenco-pazienti.component';
import { ModificaComponent } from './pazienti/modifica/modifica.component';
import { NuovoComponent } from './pazienti/nuovo/nuovo.component';
import { CardiologiaComponent } from './reparti/cardiologia/cardiologia.component';
import { ElencoRepartiComponent } from './reparti/elenco-reparti/elenco-reparti.component';
import { OrtopediaComponent } from './reparti/ortopedia/ortopedia.component';
import { PsichiatriaComponent } from './reparti/psichiatria/psichiatria.component';
import { ControlloPazientiGuard } from './shared/controllo-pazienti.guard';
import { PaginaErroreComponent } from './shared/pagina-errore/pagina-errore.component';

const routes: Routes = [
  {
    path:'home', component: HomepageComponent
  },
  {
    path:'reparti', component: ElencoRepartiComponent, 
    children:[
      {
        path: 'cardiologia', component: CardiologiaComponent
      },
      {
        path: 'ortopedia', component: OrtopediaComponent
      },
      {
        path: 'psichiatria', component: PsichiatriaComponent
      },
    ]
  },
  {
    path:'pazienti', component: ElencoPazientiComponent,
    //canActivate: [ControlloPazientiGuard],
    children:[
      
  {
    path:'modifica/:codice', component: ModificaComponent
  },
  {
    path:'nuovo', component: NuovoComponent
  },
    ]
  },
  {
    path:'login', component: LoginHomeComponent
  },
  {
    path:'', redirectTo: 'home', pathMatch:'full'
  },
  {
    path:'**', component: PaginaErroreComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
