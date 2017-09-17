import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { PostService } from '../services/post.service';
import { CommentService } from '../services/comment.service';
import { IComment, IPost } from '../interfaces';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html'
})
export class CommentsComponent implements OnInit {

  post: IPost;
  comments: IComment[] = [];

  constructor(private postService: PostService,
              private commentService: CommentService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap): Observable<[IPost, IComment[]]> => {
        const id: number = +params.get('postId');
        const postsReq = this.postService.getPostById(id);
        const commentReq = this.commentService.getComments(id);

        return Observable.forkJoin(postsReq, commentReq);
      })
      .subscribe(([post, comments]: [IPost, IComment[]]) => {
        this.post = post;
        this.comments = comments;
      });
  }
}
