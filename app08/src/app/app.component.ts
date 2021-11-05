import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app08';
direttiva:boolean =false
content:boolean=false;
variables:boolean=false;
pipes:boolean=true;
  mostraDirettiva():void{
this.direttiva =!this.direttiva;
  }
mostraContent():void{
  this.content =!this.content;
   }
mostraVariables():void{
  this.variables =!this.variables;
    }
mostraPipes():void{
  this.pipes=!this.pipes
}
    
}
