import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="Basic of ts for angular"

    //  data:Number=20
    //  getdata(item:number|boolean)
    //  {
    //     if(typeof item==="number"){

    //       return item*20
    //     }
    //  }//ts define number and boolean value

    data:{name:string,phone:number}={name:'akash',phone:345545}


    getdata(item:{name:string,phone:2344})
      {
        if(typeof item==="number"){

           return item*20
         }
     }//object define in ts
} 

