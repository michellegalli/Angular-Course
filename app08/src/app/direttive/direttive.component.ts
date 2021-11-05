import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direttive',
  templateUrl: './direttive.component.html',
  styleUrls: ['./direttive.component.css']
})
export class DirettiveComponent implements OnInit {
stileUno:string='color:red; font-size: 1.5rem'
coloreUno:string='blue';
nomi:string[];

classeUno: string="evidenziato";
classeDue: string[]=["evidenziato","sottolineato"]

stileDue ={
'color': 'red',
'font-size':'2rem'

};
  oggettoClassi={
    'evidenziato':false
  }
  constructor() { 
    this.nomi=[
      "Marco","Lucilla","Simo","Mia","Camilla"
    ];
  }

  ngOnInit(): void {
  }
getStyle(n: string):any{
  
    if(n.length> 6){
    return {'color': 'blue'
   };
  }
  return {};
}

getClasses():any{
return{
  'evidenziato':true,
  'sottolineato':true
}
}

evidenzia(){
  this.oggettoClassi.evidenziato= !this.oggettoClassi.evidenziato
}
}