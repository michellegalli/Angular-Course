import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertComponent } from './argomenti/alert/alert.component';
import { AllineamentoComponent } from './argomenti/allineamento/allineamento.component';
import { BadgeComponent } from './argomenti/badge/badge.component';
import { BordiComponent } from './argomenti/bordi/bordi.component';
import { CardComponent } from './argomenti/card/card.component';
import { CollegamentiComponent } from './argomenti/collegamenti/collegamenti.component';
import { ColonneAvanzateComponent } from './argomenti/colonne-avanzate/colonne-avanzate.component';
import { ColonneComponent } from './argomenti/colonne/colonne.component';
import { ColoreComponent } from './argomenti/colore/colore.component';
import { ContainerComponent } from './argomenti/container/container.component';
import { DisposizioneComponent } from './argomenti/disposizione/disposizione.component';
import { DropdownComponent } from './argomenti/dropdown/dropdown.component';
import { ImmaginiComponent } from './argomenti/immagini/immagini.component';
import { ListeComponent } from './argomenti/liste/liste.component';
import { NavbarComponent } from './argomenti/navbar/navbar.component';
import { SpaziatureComponent } from './argomenti/spaziature/spaziature.component';
import { TabelleComponent } from './argomenti/tabelle/tabelle.component';
import { TestComponent } from './argomenti/test/test.component';
import { VisibilitaComponent } from './argomenti/visibilita/visibilita.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {
    path: 'container',
    component: ContainerComponent,
  },
  {
    path: 'colonne',
    component: ColonneComponent,
  },
  {
    path: 'visibilita',
    component: VisibilitaComponent,
  },
  {
    path: 'colore',
    component: ColoreComponent,
  },
  {
    path: 'bordi',
    component: BordiComponent,
  },
  {
    path: 'allineamento',
    component: AllineamentoComponent,
  },
  {
    path: 'spaziature',
    component: SpaziatureComponent,
  },
  {
    path: 'disposizione',
    component: DisposizioneComponent,
  },
  {
    path: 'immagini',
    component: ImmaginiComponent,
  },
  {
    path: 'testi',
    component: TestComponent,
  },

  {
    path: 'tabella',
    component: TabelleComponent,
  },
  {
    path: 'collegamenti',
    component: CollegamentiComponent,
  },

  {
    path: 'badge',
    component: BadgeComponent,
  },
  {
    path: 'liste',
    component: ListeComponent,
  },
  {
    path: 'alert',
    component: AlertComponent,
  },

  {
    path: 'card',
    component: CardComponent,
  },

  { path: 'colonne-avanzate',
    component: ColonneAvanzateComponent,
  },
  { path: 'dropdown',
    component: DropdownComponent,
  },
  { path: 'nav',
  component: NavComponent,
 },
 { path: 'navbar',
  component: NavbarComponent,
 },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'container',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'container',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
