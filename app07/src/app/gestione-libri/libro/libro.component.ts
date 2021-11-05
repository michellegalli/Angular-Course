import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {
@Input("datiLibro") libro:Libro;
@Output() selezionato: EventEmitter<Libro>
  constructor() {
    this.libro= new Libro(0, "titolo prova", "autore prova", 2000);
    this.selezionato=new EventEmitter<Libro>();
   }

  ngOnInit(): void {
  }

  onClick():void{

    this.selezionato.emit(this.libro);
  }
}
