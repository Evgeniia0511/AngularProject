import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { IUser } from '../interfaces';
import { generateUrl } from '../utils';

@Injectable()
export class UserService {
  constructor(private http: Http) {
  }

  getUsers(): Observable<IUser[]> {
    return this.http
      .get(generateUrl('users'))
      .map(response => response.json());
  }

  getUserById(id): Observable<IUser> {
    return this.http
      .get(generateUrl(`users/${id}`))
      .map(response => response.json());
  }
}

