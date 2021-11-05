import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { atleti } from 'src/app/data/atleti';
import { Atleta } from 'src/app/models/atleta';
import { AtletaService } from '../atleta.service';

@Component({
  selector: 'app-dettaglio-atleta',
  templateUrl: './dettaglio-atleta.component.html',
  styleUrls: ['./dettaglio-atleta.component.css']
})
export class DettaglioAtletaComponent implements OnInit {
atleta:Atleta;
  constructor(private route: ActivatedRoute, private as : AtletaService, private router: Router) {
    this.atleta= {
      id:0,
      nome:'',
      cognome:'',
      punti:0
    }
   }

  ngOnInit(): void {
 let id:number = Number(this.route.snapshot.paramMap.get('id'));

 let atletaRestituito = this.as.getAtletaById(id);

 if(atletaRestituito)
 this.atleta= atletaRestituito;
 else{
   alert('Atleta inesistente!!!');
   this.router.navigateByUrl("/atleti")
   
 }

  }

}
