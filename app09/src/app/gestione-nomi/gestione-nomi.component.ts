import { Component, OnInit } from '@angular/core';
import { NomeService } from './nome.service';

@Component({
  selector: 'app-gestione-nomi',
  templateUrl: './gestione-nomi.component.html',
  styleUrls: ['./gestione-nomi.component.css']
})
export class GestioneNomiComponent implements OnInit {
nomi: string[];

//inietto il servizio nel costruttore
  constructor(private ns:NomeService) {
    this.nomi=[];
   }

  ngOnInit(): void {
    this.nomi= this.ns.getNomi();
  }
inserisci(nome:any): void {
this.ns.addNome(nome.value);

  nome.value='';
}
}
