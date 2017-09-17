import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <a routerLink="/">Home</a>
      <h1>{{title}}</h1>
      <router-outlet></router-outlet>
  `
})

export class AppComponent {
  title = 'Test';
}
