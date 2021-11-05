import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paziente } from 'src/app/models/paziente';
import { UtenteService } from 'src/app/services/utente.service';

@Component({
  selector: 'app-elenco-pazienti',
  templateUrl: './elenco-pazienti.component.html',
  styleUrls: ['./elenco-pazienti.component.css']
})
export class ElencoPazientiComponent implements OnInit {
  elencoPazienti: Paziente[];
  modify:boolean;
  modifica:boolean;
  constructor(private us: UtenteService, private router: Router, private route: ActivatedRoute) {
    this.elencoPazienti=[]
    this.modify=false;
    this.modifica=false;
  }

  ngOnInit(): void {
    this.elencoPazienti= this.us.getPaziente();

    this.modify= this.us.modifica

    
  }
  mostra(){
    this.modifica=true;
  }
}
