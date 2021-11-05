import { Injectable } from '@angular/core';
import { atleti } from '../data/atleti';
import { Atleta } from '../models/atleta';

@Injectable({
  providedIn: 'root'
})
export class AtletaService {

  constructor() { }

  getAtleti():Atleta[]{
    return atleti;
  }

  addAtleta(atleta:Atleta):void{
    atleti.push(atleta)
  }

  getAtletaById(id:number):any{
    let atleta=undefined;

    atleta = atleti.find(
      a =>a.id ==id
    );
    return atleta;
  }
  updateAtleta(atleta:Atleta):void{
let p = atleti.findIndex(
  a => a.id == atleta.id
);
if(p>= 0)
atleti[p]= atleta;
  }

deleteAtletaById(id:number){
  let p= atleti.findIndex(
    a=> a.id==id
  );
  if(p>=0)
  atleti.splice(p,1)
}
}
