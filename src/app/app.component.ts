import { Component } from '@angular/core';
import {ProductService} from './products/product.service';

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
  `,
  providers: [ProductService]
  
 
})
export class AppComponent {
  title = 'Angular: Getting Started';
}
