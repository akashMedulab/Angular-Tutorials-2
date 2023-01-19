import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControlName } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="Reactive Form "
  loginForm=new  FormGroup ({
    name:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl('')

  })
   
  userLogin(){
    console.log(this.loginForm.value)
  }
} 

