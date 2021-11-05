import { Component, OnInit } from '@angular/core';
import { Recensione } from '../recensione/recensione';

@Component({
  selector: 'app-gestione-recensioni',
  templateUrl: './gestione-recensioni.component.html',
  styleUrls: ['./gestione-recensioni.component.css']
})
export class GestioneRecensioniComponent implements OnInit {
recensioni: Recensione[];
newRecensione: boolean=false;
toModify: boolean=true;
modify: boolean=true;
recensioneAttiva?:Recensione;

  constructor() {
  this.recensioni=[
    new Recensione(1, "pippo", "Prodotto valido", 5),
    new Recensione(2, "pluto", "Prodotto scarso", 1),
    new Recensione(3, "topolino", "Prodotto nella media", 3),

    ]
   }

  ngOnInit(): void {
  }
aggiungi(){
this.newRecensione=!this.newRecensione

}
mostra(){
this.toModify=!this.toModify
}
addRecensione(c: any, a:any, t:any, p:any): void{
this.recensioni.push(new Recensione(c.value, a.value, t.value, p.value))
c.value=" ";
a.value=" ";
t.value=" ";
p.value=" ";
this.newRecensione=!this.newRecensione
}

modifica(recensione:Recensione): void{
  this.recensioneAttiva= recensione;
}
conferma(codice: any, autore: any, testo: any, punteggio: any){
  this.recensioneAttiva!.codice = codice.value
  this.recensioneAttiva!.autore = autore.value
  this.recensioneAttiva!.testo = testo.value
  this.recensioneAttiva!.punteggio = punteggio.value

  codice.value= 0;
  autore.value='';
  testo.value= '';
  punteggio.value= 0;

  this.recensioneAttiva= undefined;
}
annulla(codice: any, autore: any, testo: any, punteggio: any){
  this.recensioneAttiva= undefined
}
}
