import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-test-classi',
  templateUrl: './test-classi.component.html',
  styleUrls: ['./test-classi.component.css']
})
export class TestClassiComponent implements OnInit {
//istanza di una persona
  persona:Persona;
//array di persone
elencoPersone: Persona[];

  constructor() {
    this.persona= new Persona("Michelle", "Galli", 22)
    
    this.elencoPersone=[
      new Persona("Michele", "Galli", 44),
      new Persona("Michelle", "Galli", 22),
      new Persona("Michela", "Galli", 33)
    ]; 
  }

  ngOnInit(): void {

    /*
    //creo una scatola
    const s1 = new Scatola("pietre", 9);
    const s2 = new Scatola("monete");

      s1.contenuto = "foglie"
      s2.peso = -30
    //lego contenuto scatole
    console.log("contenuto di s1: " + s1.contenuto + ", peso: " + s1.peso) 
    console.log("contenuto di s1: " + s2.contenuto + ", peso: " + s2.peso) 
  */

  }

}
//nuova classe
class Scatola{
  //attributi
private _contenuto: string;
private _peso: number;

  //costruttore
constructor(c:string, p?:number){
  this._contenuto = c;
  this._peso= p || 0;

}
  //metodig getter
  get contenuto():string{
    return this._contenuto;
  }
  get peso():number{
    return this._peso;
  }

  //metodi setter
  set contenuto(c:string){
    this._contenuto = c;
  }
  set peso(p:number){
    this._peso = p;
  }
}


