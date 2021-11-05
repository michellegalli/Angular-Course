import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dipendente',
  templateUrl: './dipendente.component.html',
  styleUrls: ['./dipendente.component.css']
})
export class DipendenteComponent implements OnInit {
  nascosto:boolean=true;
dipendente={
  codice: 23,
  immagine: 'assets/img/23.jpg',
  cognome: "Persoldi",
  nome: "Davide",
  assunzione: "10-12-2018",
  indirizzo: "via Agra 23",
  cap: "80143",
  citta: "Napoli",
  telefono: "3473498004",
  email: "davide.persoldi@gmail.com"
}
  constructor() { }

  ngOnInit(): void {
  }
  onActive(){
    this.nascosto= !this.nascosto;
    
  }
}
