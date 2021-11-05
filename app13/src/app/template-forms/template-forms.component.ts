import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatiUtente } from '../models/dati-utente';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css'],
})
export class TemplateFormsComponent implements OnInit {
  datiModel: DatiUtente;
  dati:DatiUtente;

submitOk:boolean=false;
  constructor() {
    this.datiModel = {
      nome: '',
      cognome: '',
      intviaggi: false,
      intmusica: false,
      intcibo: false,
      laurea: '',
    };

    this.dati= Object.assign({}, this.datiModel);
    
  }

  ngOnInit(): void {}

onSubmit(form: NgForm):void{
if(form.valid){
  alert("Il form è valido e verrà inviato");
  this.submitOk=true;
}else {alert("Il form è invalido")}
}

}
