import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../interfaces';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  users: IUser[] = [];

  constructor(private userService: UserService,
              private router: Router,
              private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.userService
      .getUsers()
      .subscribe((users: IUser[]) => {
        this.users = users;
      });

    this.firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required]
    });
  }

  redirectToPost(user: IUser): void {
    this.router.navigate(['/posts', user.id]);
  }
}
