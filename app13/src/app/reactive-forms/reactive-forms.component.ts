import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
loginForm: FormGroup;
  constructor() {
    this.loginForm= new FormGroup({})
   }

  ngOnInit(): void {
    this.loginForm= new FormGroup({
      username: new FormControl('utente'),
      password: new FormControl('123'),
      contatti: new FormGroup({
        telefono: new FormControl('000'),
        email: new FormControl('info@gmail.com')
      })
    });

    
  }
onSubmit():void{
  alert("dati inviati");
}
}
