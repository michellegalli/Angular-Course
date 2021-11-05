import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Atleta } from 'src/app/models/atleta';
import { AtletaService } from '../atleta.service';

@Component({
  selector: 'app-modifica-atleti',
  templateUrl: './modifica-atleti.component.html',
  styleUrls: ['./modifica-atleti.component.css']
})
export class ModificaAtletiComponent implements OnInit {
atleta: Atleta;
  constructor( private as: AtletaService, private router: Router, private route: ActivatedRoute) {
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
  conferma( n: any, c: any, p: any):void{
    let atletaModificato={
      id: this.atleta.id,
      nome: n.value,
      cognome:c.value,
      punti:p.value
    
    }
    this.as.updateAtleta(atletaModificato);

this.router.navigateByUrl('/atleti/' + this.atleta.id)
  }

  elimina():void{
    if(confirm("vuoi eliminare l'atleta "+ this.atleta.nome+ "?"))
    this.as.deleteAtletaById(this.atleta.id);
    this.router.navigateByUrl('/atleti')

  }
}
