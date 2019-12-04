import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostContainerComponent } from './post-container/post-container.component';
import { ItemPostComponent } from './item-post/item-post.component';
import { CommentsModule } from './comments/comments.module';
import { NewPostComponent } from './new-post/new-post.component';


@NgModule({
  declarations: [
    PostContainerComponent,
    ItemPostComponent,
    NewPostComponent
    ],
  imports: [
    CommonModule,
    CommentsModule
  ],
  exports:[
    PostContainerComponent,
    NewPostComponent
    ]
})
export class PostsModule { }
