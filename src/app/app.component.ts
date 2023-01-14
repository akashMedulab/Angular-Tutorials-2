import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="Nested loop "
 user=['akash','kunal','shivram','ajit']

 users=[
  {name:'akash',phone:'37645556',socialAccounts:['facebook','insta','youtube']},
  {name:'kunal',phone:'37645556',socialAccounts:['youtube','insta','email']},
  {name:'shivram',phone:'37645556',socialAccounts:['linked','insta','facebook']},
  {name:'ajit',phone:'37645556',socialAccounts:['email','insta','linked']},
 
 ]
   
}
