import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
voci:string[];
scelta:string;
  constructor() {
this.voci=[
  "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato", "domenica"
];
this.scelta='';
   }

  ngOnInit(): void {
  }
scegli(e:any):void{
  this.scelta = e.target.value;
}
}
