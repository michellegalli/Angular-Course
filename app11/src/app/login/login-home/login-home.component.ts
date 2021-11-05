import { Component, OnInit } from '@angular/core';
import { UtenteService } from 'src/app/services/utente.service';

@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.css']
})
export class LoginHomeComponent implements OnInit {

  constructor(private us: UtenteService) { }

  ngOnInit(): void {
  }
login(username:any, password:any):void{
  
  this.us.autentica(username.value, password.value)
}
}
