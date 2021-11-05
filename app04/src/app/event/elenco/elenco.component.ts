import { BoundElementProperty } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.component.html',
  styleUrls: ['./elenco.component.css']
})
export class ElencoComponent implements OnInit {
display: string ="Fai qualcosa sopra"
  constructor() { }

  ngOnInit(): void {
  }
onClick(){
  this.display="Hai cliccato sul quadrato"
}

onMouseOver(){
  this.display= "Sei entrato nel quadrato"

}
onMouseOut(){
  this.display="sei uscito dal quadrato"
}
onFocus(){
  this.display="Focus"
}

onBlur(){
  this.display="Blur!"
}
onInput(event: Event){
  let element:HTMLInputElement = event.target as HTMLInputElement;
  this.display="Input tramite evento " + element.value;
}
}
