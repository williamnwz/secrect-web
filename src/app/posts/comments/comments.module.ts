import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentContainerComponent } from './comment-container/comment-container.component';
import { ItemCommentComponent } from './item-comment/item-comment.component';



@NgModule({
  declarations: [
    CommentContainerComponent,
    ItemCommentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CommentContainerComponent,
    ItemCommentComponent
  ]
})
export class CommentsModule { }
