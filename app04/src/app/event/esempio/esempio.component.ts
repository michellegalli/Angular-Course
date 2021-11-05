import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esempio',
  templateUrl: './esempio.component.html',
  styleUrls: ['./esempio.component.css']
})
export class EsempioComponent implements OnInit {
display: string="Clicca sul pulsante";
disabilitato: boolean=true;
contatore:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    //console.log("Hai cliccato sul pulsante");
    this.contatore++
    this.display="Hai cliccato sul pulsante "+this.contatore +" volte"
    
  }
  onReset(){
    this.contatore=0;
    this.display="Hai resettato il contatore"

  }

  onActive(){
    this.disabilitato= !this.disabilitato;
    
  }

}
