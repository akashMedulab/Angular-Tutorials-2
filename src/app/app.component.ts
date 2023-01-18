import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="tamplate Reference variable"

  getval(item:any){
    console.log(item)
  }
 

  
   
} 

