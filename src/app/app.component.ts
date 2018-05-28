import { Component } from '@angular/core';


@Component({
  selector: 'pm-root',
  //templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  template: `
  <div><h1>{{pageTitle}}</h1>
    <pm-products></pm-products>
  </div>
  <div>
    <pm-users></pm-users>
  </div>
  `

  
 
})
export class AppComponent {
  title = 'Angular: Getting Started';
}
