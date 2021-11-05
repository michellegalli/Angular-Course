import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-builder',
  templateUrl: './reactive-form-builder.component.html',
  styleUrls: ['./reactive-form-builder.component.css']
})
export class ReactiveFormBuilderComponent implements OnInit {
loginForm: FormGroup
  constructor(private fb: FormBuilder) {
    this.loginForm= new FormGroup({})
   }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username:['',[ Validators.required, this.controlloUsername]],
      password:['', [Validators.required, Validators.minLength(8)]],
      email: [''],
      loginemail:[false],
      datiPagamento: [false],

      carte: this.fb.array([
        this.fb.group({
          numero:[''],
          codice:[''],
        })
      ]),

     
    });
  }
nuovaCarta(){
  (this.loginForm.controls.carte as FormArray).push(
    this.fb.group({
      numero:[''],
      codice:['']
    })
  )
}
get carte(){
  return (this.loginForm.controls.carte as FormArray)
}

  onSubmit():void{
    alert("Form inviato con successo")
  }
  cambiaLogin():void{
    if(this.loginForm.controls.loginemail.value){
      this.loginForm.controls.username.clearValidators();
      this.loginForm.controls.email.setValidators([Validators.required, Validators.email]);
    }else{
      this.loginForm.controls.username.setValidators([Validators.required])
      this.loginForm.controls.email.clearValidators()
    }
    this.loginForm.controls.username.updateValueAndValidity();
    this.loginForm.controls.email.updateValueAndValidity();
  }
  controlloUsername(elemento: AbstractControl){
if(elemento.value=="admin"){
return{
  'admin': true
}
}
return null
  }
}
