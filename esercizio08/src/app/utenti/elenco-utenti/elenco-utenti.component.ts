import { Component, OnInit } from '@angular/core';
import { Utente } from 'src/app/models/utente';
import { UtenteService } from 'src/app/servizi/utente.service';

@Component({
  selector: 'app-elenco-utenti',
  templateUrl: './elenco-utenti.component.html',
  styleUrls: ['./elenco-utenti.component.css']
})
export class ElencoUtentiComponent implements OnInit {
elencoUtenti: Utente[];
  constructor(private us: UtenteService) {
    this.elencoUtenti=[]
   }

  ngOnInit(): void {
    this.elencoUtenti= this.us.getUtenti()
  }

}
