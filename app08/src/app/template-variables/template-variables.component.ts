import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-template-variables',
  templateUrl: './template-variables.component.html',
  styleUrls: ['./template-variables.component.css']
})
export class TemplateVariablesComponent implements OnInit {
numero:number=0
persone: Persona[];

@ViewChild('display')display!:ElementRef;
  constructor() { 
    this.persone=[
      new Persona("Maria", "Verdi"),
      new Persona("Maria", "Verdi"),
      new Persona("Maria", "Verdi"),
      

    ]
  }

  ngOnInit(): void {
  }
prendiColore(colore:any):void{
  alert("il tuo colore "+ colore.value)
}
inserisci(n:any, c:any): void{
  this.persone.push(new Persona(n.value, c.value))
  n.value=" ";
  c.value=" "
}
elimina(p:number):void{
  
  
  if(confirm('Sei sicura di eliminare '+ this.persone[p].nome +"?"))
  
  this.display.nativeElement.innerHTML= "Eliminato "+this.persone[p].nome
  + "<br>"
  this.persone.splice(p,1);

}
}
