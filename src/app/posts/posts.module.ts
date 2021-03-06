import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostContainerComponent } from './post-container/post-container.component';
import { ItemPostComponent } from './item-post/item-post.component';
import { CommentsModule } from './comments/comments.module';
import { NewPostComponent } from './new-post/new-post.component';
import { NewPostPopupComponent } from './new-post-popup/new-post-popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PostContainerComponent,
    ItemPostComponent,
    NewPostComponent,
    NewPostPopupComponent
    ],
  imports: [
    CommonModule,
    CommentsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    PostContainerComponent,
    NewPostComponent,
    NewPostPopupComponent
    ],
    entryComponents:[
      NewPostPopupComponent
    ]
})
export class PostsModule { }
