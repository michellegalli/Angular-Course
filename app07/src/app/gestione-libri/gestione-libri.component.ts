import { Component, OnInit } from '@angular/core';
import { Libro } from '../models/libro';

@Component({
  selector: 'app-gestione-libri',
  templateUrl: './gestione-libri.component.html',
  styleUrls: ['./gestione-libri.component.css']
})
export class GestioneLibriComponent implements OnInit {
libri: Libro[];
  libroSelezionato?: Libro;
  constructor() {
    this.libri=[
      new Libro(1, "Manuale di Angular", "Michelle Galli", 2021),
      new Libro(2, "Tutto sul Sushi", "Fabio Marrone", 2020),
      new Libro(3, "La storia d'Italia", "Sara Cavalli", 2011)
    ]
   }

  ngOnInit(): void {
  }
  recuperaSelezione(libro:Libro):void{
    this.libroSelezionato=libro;
  }
  togliSelezione():void{
    this.libroSelezionato= undefined;
  }

}


