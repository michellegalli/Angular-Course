import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.css']
})
export class ContentProjectionComponent implements OnInit {
elenco:string[];
prodotto:any[];
  constructor() { 
    this.elenco=[
      'aggiungi', 'rimuovi', 'chiudi'
    ]
    this.prodotto=[
      
      {
      nome:"pianta",
      descrizione: 'pianta carnivora',
      prezzo: 45}
    ]
  }

  ngOnInit(): void {
  }

}
