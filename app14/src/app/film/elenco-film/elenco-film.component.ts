import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { elencoFilm$ } from 'src/app/data/elencoFilm';
import { Film } from 'src/app/models/film';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-elenco-film',
  templateUrl: './elenco-film.component.html',
  styleUrls: ['./elenco-film.component.css'],
})
export class ElencoFilmComponent implements OnInit {
  elencoFilms: Film[];
  sottoscrizioneFilm!: Subscription
  constructor(private fs: FilmService) {
    this.elencoFilms = [];
  }

  ngOnInit(): void {
    //chiedo al service
   // this.elencoFilms = this.fs.getFilms();
   this.sottoscrizioneFilm= this.fs.getFilms$().subscribe(
     elenco=> this.elencoFilms= elenco,
     errore=> console.log("errore!"+ errore),
     ()=> console.log("Dati dei film caricati con successo")
   );
  }
}
