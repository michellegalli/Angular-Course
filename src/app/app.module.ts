import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MioComponentComponent } from './interpolation/mio-component/mio-component.component';
import { PostComponent } from './interpolation/post/post.component';
import { PhotoComponent } from './interpolation/photo/photo.component';
import { EsempioComponent } from './property/esempio/esempio.component';
import { GalleryComponent } from './property/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    MioComponentComponent,
    PostComponent,
    PhotoComponent,
    EsempioComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
