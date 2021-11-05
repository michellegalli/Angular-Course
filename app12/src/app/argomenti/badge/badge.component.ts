import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {
messaggi: number;
  constructor() {
    this.messaggi=0
   }

  ngOnInit(): void {
  }
incremento():void{
  this.messaggi++
}
}
