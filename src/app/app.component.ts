import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="send Data child to parent component"
   data="a"
  updateData(item:string)
  {

     console.log(item)
     this.data=item
  }
  
  

  
   
} 

