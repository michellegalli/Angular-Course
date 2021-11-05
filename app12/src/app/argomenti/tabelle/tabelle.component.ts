import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabelle',
  templateUrl: './tabelle.component.html',
  styleUrls: ['./tabelle.component.css']
})
export class TabelleComponent implements OnInit {
persone= [{
  id: 1,
  nome:"Mario",
  cognome: "Bianchi"
},
{
  id: 1,
  nome:"Mario",
  cognome: "Bianchi"
},
{
  id: 1,
  nome:"Mario",
  cognome: "Bianchi"
}


]
  constructor() { }

  ngOnInit(): void {
  }

}
