import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AtletaService } from '../atleta.service';

@Component({
  selector: 'app-nuovo-atleta',
  templateUrl: './nuovo-atleta.component.html',
  styleUrls: ['./nuovo-atleta.component.css']
})
export class NuovoAtletaComponent implements OnInit {

  constructor(private as: AtletaService, private router: Router) { }

  ngOnInit(): void {
  }

  inserisci(i: any, n:any, c: any, p: any):void{
    let atleta={
      id: i.value,
      nome: n.value,
      cognome: c.value,
      punti: p.value,
    };
    this.as.addAtleta(atleta);

    this.router.navigateByUrl('/atleti');
  }
}
