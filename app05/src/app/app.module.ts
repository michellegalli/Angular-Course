import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SceltaComponent } from './scelta/scelta.component';
import { IterazioneComponent } from './iterazione/iterazione.component';

@NgModule({
  declarations: [
    AppComponent,
    SceltaComponent,
    IterazioneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
