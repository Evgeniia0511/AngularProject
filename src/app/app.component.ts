import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1>{{title}}</h1>
      <a routerLink="/">Users</a>
      <a routerLink="/posts">Posts</a>
      <a routerLink="/comments">Comments</a>
      <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Test';
}
