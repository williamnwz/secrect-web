import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostContainerComponent } from './post-container/post-container.component';
import { ItemPostComponent } from './item-post/item-post.component';
import { CommentsModule } from './comments/comments.module';


@NgModule({
  declarations: [
    PostContainerComponent,
    ItemPostComponent,
    ],
  imports: [
    CommonModule,
    CommentsModule
  ],
  exports:[
    PostContainerComponent
    ]
})
export class PostsModule { }
