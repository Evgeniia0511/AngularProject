import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { IComment } from '../interfaces';
import { generateUrl } from '../utils';

@Injectable()
export class CommentService {

  constructor(private http: Http) {
  }

  getComments(id: number): Observable<IComment[]> {
    return this.http
      .get(generateUrl(`posts/${id}/comments`))
      .map(response => response.json());
  }
}
