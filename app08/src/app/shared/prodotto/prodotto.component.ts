import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent implements OnInit {
prodotto= {
nome: '',
descrizione: '',
prezzo: 0
}
  constructor() { }

  ngOnInit(): void {
  }

}
