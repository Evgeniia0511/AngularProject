
2
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { MessageService } from './services/messages.service'

@Component({
  selector: 'app-root',
  template: `      
      <button routerLink="/" mat-button color="primary">Home</button>
      <div *ngIf="message" class="alert alert-success">{{message.text}}</div>
      <h1>{{title}}</h1>
      <router-outlet></router-outlet>
  `
})

export class AppComponent implements OnDestroy {
  title = 'Test';
  message: any;
  subscription: Subscription;

  constructor(private messageService: MessageService) {
    this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message; });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
