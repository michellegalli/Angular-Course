import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtenteService } from 'src/app/services/utente.service';

@Component({
  selector: 'app-nuovo',
  templateUrl: './nuovo.component.html',
  styleUrls: ['./nuovo.component.css']
})
export class NuovoComponent implements OnInit {

  constructor(private us: UtenteService, private router: Router) { }

  ngOnInit(): void {
  }
  inserisci(cod: any, n:any, c: any, s: any):void{
    let paziente={
      codice: cod.value,
      nome: n.value,
      cognome: c.value,
      stanza: s.value,
    };
    this.us.addPaziente(paziente);

    this.router.navigateByUrl('/pazienti');
  }
}
