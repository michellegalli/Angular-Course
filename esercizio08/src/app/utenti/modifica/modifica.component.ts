import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utente } from 'src/app/models/utente';
import { UtenteService } from 'src/app/servizi/utente.service';

@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrls: ['./modifica.component.css']
})
export class ModificaComponent implements OnInit {
utente: Utente;
  constructor(private us: UtenteService, private route: ActivatedRoute, private router:Router) { 
    this.utente={
      id:0,
      nome:'',
      cognome:'',
      username: '',
      password:''
    }
  }

  ngOnInit(): void {
    let id:number= Number(this.route.snapshot.paramMap.get('id'))
    let utenteRestituito= this.us.getCodice(id)
    if(utenteRestituito){this.utente=utenteRestituito}
    else{
      alert('Utente inesistente')
      this.router.navigateByUrl('utenti')
    }
  }
conferma(n:any, c: any, u:any, p: any): void{
let utenteModificato={
  id: this.utente.id,
  nome: n.value,
  cognome: c.value,
  username: u.value,
  password: p.value
}
this.us.updateUtenti(utenteModificato);
this.router.navigateByUrl('utenti')
}
elimina():void{
  if(confirm("vuoi eliminare l'utente " + this.utente.nome+ "?"))
  this.us.deleteUtente(this.utente.id);
  this.router.navigateByUrl('utenti')
}
}
