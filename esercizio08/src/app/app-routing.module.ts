import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElencoUtentiComponent } from './utenti/elenco-utenti/elenco-utenti.component';
import { ModificaComponent } from './utenti/modifica/modifica.component';
import { NuovoComponent } from './utenti/nuovo/nuovo.component';

const routes: Routes = [
  {
    path: 'utenti',
    component: ElencoUtentiComponent,
    children: [
      {path: 'modifica/:id', component: ModificaComponent},
      {path: 'nuovo', component: NuovoComponent}
    ]
  },
  {
    path:'',
    component: ElencoUtentiComponent,
    pathMatch: 'full'
  },
  {
  path:'**',
  redirectTo: 'utenti'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
