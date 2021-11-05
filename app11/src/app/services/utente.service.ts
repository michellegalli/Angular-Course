import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { pazienti } from '../data/pazienti';
import { Paziente } from '../models/paziente';
import { Utente } from '../models/utente';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {
utente:Utente;
ammistratore:Utente;
modifica: boolean
  constructor(private router:Router) {
    this.modifica=false;
    this.utente={
      username: "ospite",
      password:"123",
      autenticato: false,
      amministra: false,
    };
    this.ammistratore={
      username:"",
      password:"",
      autenticato:false,
      amministra:true,
    }
   }

   
   autentica(user:string, pass:string):void{
    if(user == 'pippo' && pass== 'pluto'){
      this.utente={
        username:user,
        password:pass,
        autenticato: true,
        amministra:false
      };
      alert("utente "+ user + " riconosciuto")
      this.router.navigateByUrl("pazienti")
      this.modifica=false
    }else if(user == 'admin' && pass== 'admin'){
      this.ammistratore={
        username:user,
        password:pass,
        autenticato:true,
        amministra:true,
      }
      alert("Amministratore riconosciuto")
      this.router.navigateByUrl("pazienti")
      this.modifica=true
    }
    else{
      alert("utente "+ user + " non riconosciuto")
      this.router.navigateByUrl("errore")
    }
}
    logout():void{
      this.utente={
        username: "ospite",
        password:"123",
        autenticato: false,
        amministra:false
      };
      alert("Utente disconnesso");
      this.router.navigateByUrl("login")
    }
    getPaziente(): Paziente[]{
      return pazienti;
    }
    addPaziente(paziente:Paziente):void{
      pazienti.push(paziente)
    }
    getCodice(codice:number):any{
      let paziente=undefined;
  
      paziente = pazienti.find(
        p =>p.codice ==codice
      );
      return paziente;
    }
    updatePazienti(paziente: Paziente):void{
      let paz = pazienti.findIndex(
        p => p.codice == paziente.codice
      );
      if(paz>= 0)
      pazienti[paz]= paziente;
        }
        deletePazienteById(codice:number){
          let paz= pazienti.findIndex(
            p => p.codice == codice
          );
          if(paz>=0)
          pazienti.splice(paz,1)
        }
}
