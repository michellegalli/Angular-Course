import { Component, OnInit } from '@angular/core';
import { Pacco } from '../models/pacco';

@Component({
  selector: 'app-test-interfacce',
  templateUrl: './test-interfacce.component.html',
  styleUrls: ['./test-interfacce.component.css']
})
export class TestInterfacceComponent implements OnInit {
mioPacco : Pacco;
pacchi: Pacco[];
paccoSelezionato?: Pacco;


  constructor() { 
    this.mioPacco={
      codice: 4,
      contenuto: "lettere",
      peso: 3,
      pesoImballo: 0.5,
    }
    this.pacchi = [
      {
        codice: 4,
        contenuto: "Camice",
        peso: 1
      },
      {
      codice: 3,
      contenuto: "Sifoni",
      peso: 2,
      pesoImballo: 1
    },
    {
        codice: 2,
        contenuto: "Scarpe",
        peso: 3
      }
    ]
  }

  ngOnInit(): void {
    let m1 = new Menager (2, "Francesco", "Gialli", "qualità");
    m1.stampaDati();
  }

  seleziona(p: Pacco): void{
    this.paccoSelezionato= p;
  }

  togliSelezione():void{
    this.paccoSelezionato= undefined;
  }
}

interface Dipendente{
  matricola: number,
  cognome: string,
  nome: string,
  stampaDati():void
}

class Menager implements Dipendente{
  matricola: number;
  cognome: string;
  nome: string;
  reparto:string

  constructor(m: number, c:string, n:string, r:string){
    this.matricola= m;
    this.cognome=c;
    this.nome=n;
    this.reparto=r;
  }
  stampaDati(): void {
console.log ("sono il dipendente con matricola: " + this.matricola + " e sono un menager del reparto "+ this.reparto)
  }
  
}