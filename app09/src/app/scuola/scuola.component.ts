import { Component, OnInit } from '@angular/core';
import { Studente } from '../models/studente';
import { LoggerService } from '../services/logger.service';
import { StudenteService } from '../servizi/studente.service';

@Component({
  selector: 'app-scuola',
  templateUrl: './scuola.component.html',
  styleUrls: ['./scuola.component.css']
})
export class ScuolaComponent implements OnInit {
studenti: Studente[];
orderMediaAsc: boolean;
orderIdAsc: boolean;
orderCognomeAsc:boolean;

  constructor( private ss:StudenteService, private ls:LoggerService) { 
this.studenti=[];
this.orderMediaAsc= true;
this.orderIdAsc= true;
this.orderCognomeAsc=true;
  }

  ngOnInit(): void {
  this.studenti= this.ss.getStudenti();
  }
sortStudentiByMedia():void{
this.ls.log("Scuola: studenti ordinati per media "+(this.orderMediaAsc ? 'cresciente' : 'decrescente'))
  if(this.orderMediaAsc){
    this.studenti.sort(
      (a,b)=> a.media - b.media
    );
  } else {this.studenti.sort(
  (a,b)=> b.media - a.media);
   }
  this.orderMediaAsc= !this.orderMediaAsc
}
sortStudentiById():void{
  this.ls.log("Scuola: studenti ordinati per matricola "+(this.orderIdAsc ? 'cresciente' : 'decrescente'))
  if(this.orderIdAsc){
    this.studenti.sort(
      (a,b)=> a.matricola - b.matricola
    );
  } else {this.studenti.sort(
  (a,b)=> b.matricola - a.matricola);
   }
  this.orderIdAsc= !this.orderIdAsc
}

sortStudentiByCognome():void{
  this.ls.log("Scuola: studenti ordinati per cognome "+(this.orderCognomeAsc ? 'cresciente' : 'decrescente'))
  if(this.orderCognomeAsc){
    this.studenti.sort(
      (a,b)=>{
        if(a.cognome > b.cognome){
          return 1;
        } else if (a.cognome < b.cognome) {
          return -1;
        } else {
          return 0;
        }
      }
    );
  }
    else{
      this.studenti.sort(
      (a,b)=>{
        if(a.cognome < b.cognome){
          return 1;
        } else if (a.cognome > b.cognome) {
          return -1;
        } else {
          return 0;
        }
      
  }
      );
}
  this.orderCognomeAsc=!this.orderCognomeAsc;
}


}
