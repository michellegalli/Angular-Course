import { Component, OnInit } from '@angular/core';
import { Promemoria } from '../modals/promemoria';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
elencoPromemoria: Promemoria[];

  constructor() { 
    this.elencoPromemoria=[
      new Promemoria( 1, 1, "lavare i piatti", false),
      new Promemoria( 2, 2, "fare la spesa", false),
      new Promemoria( 4, 3, "cucinare", false),
      new Promemoria( 1, 4, "preparare la borsa", true),
      new Promemoria( 3, 5, "chiamare il medico", false),
      new Promemoria( 1, 6, "revisionare i documenti", false),
      new Promemoria( 6, 7, "cucire i pantaloni", false),
      new Promemoria( 1, 8, "annaffiare i fiori", true),
      new Promemoria( 4, 9, "andare in palestra", false),
      new Promemoria( 2, 10, "aiutare nonna nelle faccende", true),
    ]
  }

  ngOnInit(): void {
  }

  
}
