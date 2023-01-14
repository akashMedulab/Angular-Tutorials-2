import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="for loop "
 user=['akash','kunal','shivram','ajit']

 userDetails=[
  {name:'akash',email:'akashmourya@edulab.in',phone:'37645556'},
  {name:'kunal',email:'kunal@edulab.in',phone:'37645556'},
  {name:'shivram',email:'shivram@edulab.in',phone:'37645556'},
  {name:'ajit',email:'ajit@edulab.in',phone:'37645556'}
 ]
 
   
}
