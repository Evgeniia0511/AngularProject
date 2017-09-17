import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { PostService } from './post.service';
import { CommentService } from './comment.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    UserService,
    PostService,
    CommentService
  ]
})
export class ServicesModule {
}
