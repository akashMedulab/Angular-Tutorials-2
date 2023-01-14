import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="style Binding "
 color='red'
 bgcolor="blue"

 updateColor(){

     this.color="green"
     this.bgcolor="pink"
 }
  
}
