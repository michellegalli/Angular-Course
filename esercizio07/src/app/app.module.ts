import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GestioneAlbumComponent } from './gestione-album/gestione-album.component';

@NgModule({
  declarations: [
    AppComponent,
    GestioneAlbumComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
