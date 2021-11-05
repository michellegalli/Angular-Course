import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esempio',
  templateUrl: './esempio.component.html',
  styleUrls: ['./esempio.component.css']
})
export class EsempioComponent implements OnInit {
percorsoImg: string ="assets/img/lago.jpg";
percorsoLink: string ="http://www.lastampa.it";

bloccato: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
