import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { elencoFilm, elencoFilm$ } from '../data/elencoFilm';
import { Film } from '../models/film';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  constructor() {}

  getFilms(): Film[] {
    return elencoFilm;
  }

  getFilms$(): Observable<Film[]> {
    return elencoFilm$.pipe(
      tap((elenco) => console.log('Dati ricevuti: ' + JSON.stringify(elenco))),
      catchError(this.gestioneErrori)
    );
  }
  gestioneErrori(e: any) {
    let errorMessage: string;
    if (e.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${e.error.message}`;
    } else {
      errorMessage = `Backend returned code ${e.status}: ${e.body.error}`;
    }
    console.error(e);
    return throwError(errorMessage);
  }
}
