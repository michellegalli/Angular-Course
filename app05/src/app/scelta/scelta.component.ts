import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scelta',
  templateUrl: './scelta.component.html',
  styleUrls: ['./scelta.component.css']
})
export class SceltaComponent implements OnInit {
visibile:boolean=true;
nascosto: boolean= true;
numero: number=6;

persona={
  nome: 'Domenico',
  cognome: 'Salli',
  anni: 44

};
colore: string ="giallo"

  constructor() { }

  ngOnInit(): void {
  }

}
