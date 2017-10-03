import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `      
      <button routerLink="/" md-button color="primary">Home</button>
      <h1>{{title}}</h1>
      <router-outlet></router-outlet>
  `
})

export class AppComponent {
  title = 'Test';
}
