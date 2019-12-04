import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentContainerComponent } from './comment-container/comment-container.component';
import { ItemCommentComponent } from './item-comment/item-comment.component';
import { ActionsCommentContainerComponent } from './actions-comment-container/actions-comment-container.component';



@NgModule({
  declarations: [
    CommentContainerComponent,
    ItemCommentComponent,
    ActionsCommentContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CommentContainerComponent,
    ItemCommentComponent,
    ActionsCommentContainerComponent
  ]
})
export class CommentsModule { }
