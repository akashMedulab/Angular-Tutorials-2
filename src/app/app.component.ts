import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControlName } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="Reactive Form validation"
  loginForm=new  FormGroup ({
    name:new FormControl('',[Validators.required,Validators.pattern('[A-Za-z]+$')]),
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)])

  })
   
  userLogin(){
    console.log(this.loginForm.value)
  }

  get name()
  {
     return this.loginForm.get('name')
  }

  get email(){
    return this.loginForm.get('email')
  }
  get password(){
    return this.loginForm.get('password')
  }
} 


