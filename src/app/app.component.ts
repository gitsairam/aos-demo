import { Component, VERSION } from '@angular/core';
import  * as AOS from 'aos';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  ngOnInit(){
    AOS.init();
  }
}
