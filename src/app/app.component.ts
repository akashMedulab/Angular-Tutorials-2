import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="reusable component"

  userDetails=[

    {name:"akash",email:"akashmourya@edulab.in"},
    {name:"kunal",email:"kunal@edulab.in"},
    {name:"ajit",email:"ajit@edulab.in"},
    {name:"shivram",email:"shivram@edulab.in"}

  ]
    
  

  
   
} 

