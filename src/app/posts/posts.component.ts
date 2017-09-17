import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';
import { IPost, IUser } from '../interfaces';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  user: IUser;
  posts: IPost[] = [];

  constructor(private postService: PostService,
              private userService: UserService,
              private route: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        const id = +params.get('id');
        const postsReq = this.postService.getPosts(id);
        const userReq = this.userService.getUserById(id);

        return Observable.forkJoin(postsReq, userReq);
      })
      .subscribe(([posts, user]: [IPost[], IUser]) => {
        this.posts = posts;
        this.user = user;
      });
  }
}
