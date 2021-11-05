import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pulsante',
  templateUrl: './pulsante.component.html',
  styleUrls: ['./pulsante.component.css']
})
export class PulsanteComponent implements OnInit {
@Input() testo:string;
@Output() pulsanteCliccato: EventEmitter<string>;
 
constructor() { 
    this.testo="testo pulsante";
    this.pulsanteCliccato= new EventEmitter<string>();
  }

  ngOnInit(): void {
  }

  onClick():void{
    this.pulsanteCliccato.emit(this.testo);
  }
}
