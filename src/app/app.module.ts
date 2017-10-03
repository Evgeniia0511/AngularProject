import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MatInputModule, MatRadioModule, MatStepperModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';


import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { ServicesModule } from './services/services.module';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: UsersComponent
      },
      {
        path: 'posts/:id',
        component: PostsComponent
      },
      {
        path: 'comments/:postId',
        component: CommentsComponent
      }
    ]),
    ServicesModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
