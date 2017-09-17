import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { IPost } from '../interfaces';
import { generateUrl } from '../utils';

@Injectable()
export class PostService {

  constructor(private http: Http) {
  }

  getPosts(id: number): Observable<IPost[]> {
    return this.http
      .get(generateUrl(`posts`), {
        params: {
          userId: id
        }
      })
      .map(response => response.json());
  }

  getPostById(id: number): Observable<IPost> {
    return this.http
      .get(generateUrl(`posts/${id}`))
      .map(response => response.json());
  }
}

