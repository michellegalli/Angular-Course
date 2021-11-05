import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iterazione',
  templateUrl: './iterazione.component.html',
  styleUrls: ['./iterazione.component.css']
})
export class IterazioneComponent implements OnInit {

colori:string[]=[
  "giallo",
  "azzurro",
  "rosso",
  "verde"
];

persone= [
  {
    nome:"Lisa",
    cognome:"Rossi"
  },
  {
    nome:"Sinoma",
    cognome:"Rossi"
  },
  {
    nome:"Alessia",
    cognome:"Rossi"
  },
  {
    nome:"Maria",
    cognome:"Rossi"
  },
]

  constructor() { }

  ngOnInit(): void {
  }

}
