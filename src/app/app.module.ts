import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule}from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { UserDetailsComponent } from './user-details/user-details.component'




@NgModule({
  declarations: [
    AppComponent,
 

      UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
