import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recensione } from './recensione';

@Component({
  selector: 'app-recensione',
  templateUrl: './recensione.component.html',
  styleUrls: ['./recensione.component.css']
})
export class RecensioneComponent implements OnInit {
@Input("datiRecensione") recensione: Recensione;
@Output() selezionato: EventEmitter<Recensione>;
  constructor() {
    this.recensione= new Recensione(1, "Michelle", "recensione buona", 1)
    this.selezionato=new EventEmitter<Recensione>();
   }

  ngOnInit(): void {
  }

  onClick():void{

    this.selezionato.emit(this.recensione);
  }
}
