import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';
import { IUser } from '../interfaces';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  users: IUser[] = [];

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.userService
      .getUsers()
      .subscribe((users: IUser[]) => {
        this.users = users;
      });
  }

  redirectToPost(user: IUser): void {
    this.router.navigate(['/posts', user.id]);
  }
}
