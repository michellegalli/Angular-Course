import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mio-component',
  templateUrl: './mio-component.component.html',
  styleUrls: ['./mio-component.component.css']
})
export class MioComponentComponent implements OnInit {
nome:string="Michelle";
prezzo: number = 1200;
numeroPezzi: number= 6;
cognome:string= "Galli"

oggi: Date= new Date();

link: string ="http://www.google.it";




  constructor() { }

  ngOnInit(): void {
  }

}
