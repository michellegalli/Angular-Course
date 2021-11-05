import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paziente } from 'src/app/models/paziente';
import { UtenteService } from 'src/app/services/utente.service';

@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrls: ['./modifica.component.css']
})
export class ModificaComponent implements OnInit {
paziente: Paziente;
  constructor(private us: UtenteService, private router: Router, private route: ActivatedRoute) { 
    this.paziente={
      codice:0,
      nome:'',
      cognome: '',
      stanza:0,
    }
  }

  ngOnInit(): void {
    let codice:number= Number(this.route.snapshot.paramMap.get('codice'))
    let pazienteRestituito = this.us.getCodice(codice)
    if(pazienteRestituito){this.paziente= pazienteRestituito;}
    else{
      alert('Paziente inesistente!!!');
      this.router.navigateByUrl("/pazienti")
    }

  }
  conferma(  n: any, c: any, s: any):void{
    let pazienteModificato={
      codice: this.paziente.codice, 
      nome: n.value,
      cognome:c.value,
      stanza:s.value
    
    }
    this.us.updatePazienti(pazienteModificato);

this.router.navigateByUrl('/pazienti')
  }

  elimina():void{
    if(confirm("vuoi eliminare il paziente "+ this.paziente.nome+ "?"))
    this.us.deletePazienteById(this.paziente.codice);
    this.router.navigateByUrl('/pazienti')

  
  }

}

