import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from '../interfaces';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService
      .getUsers()
      .subscribe((users: IUser[]) => {
        this.users = users;
      });
  }
}
