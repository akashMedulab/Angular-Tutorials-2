import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedEl]'
})
export class RedElDirective {

  constructor(el:ElementRef) { 
    el.nativeElement.innerText = "Hello I'm Akash Mourya "
    // el.nativeElement.outerHTML = "Hello I'm Akash Mourya"//to change the value
    el.nativeElement.style.color="red"
  }

}
