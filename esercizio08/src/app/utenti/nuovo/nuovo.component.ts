import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Utente } from 'src/app/models/utente';
import { UtenteService } from 'src/app/servizi/utente.service';

@Component({
  selector: 'app-nuovo',
  templateUrl: './nuovo.component.html',
  styleUrls: ['./nuovo.component.css'],
})
export class NuovoComponent implements OnInit {
  datiModel: Utente;
  dati: Utente;
  submitOk: boolean = false;
  constructor(private us: UtenteService) {
    this.datiModel = {
      id: 0,
      nome: '',
      cognome: '',
      username: '',
      password: '',
    };
    this.dati = Object.assign({}, this.datiModel);
  }

  ngOnInit(): void {}
  onSubmit(form: NgForm): void {
    if (form.valid) {
      alert('Il form è valido e verrà inviato');
      this.submitOk = true;
    } else {
      alert('Il form è invalido');
    }
  }
  inserisci(id: any, n: any, c: any, u: any, p: any,){
    let utente={
      id: id.value,
      nome: n.value,
      cognome: c.value,
      username: u.value,
      password: p.value,
    };
    this.us.addUtente(utente);
  }
}
