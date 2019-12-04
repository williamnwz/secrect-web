import { Component, OnInit, Input } from '@angular/core';
import { Comment } from 'src/app/models/comment.model';

@Component({
  selector: 'actions-comment-container',
  templateUrl: './actions-comment-container.component.html',
  styleUrls: ['./actions-comment-container.component.css']
})
export class ActionsCommentContainerComponent implements OnInit {

  @Input()
  public Comments : Array<Comment> = [];
  constructor() { }

  ngOnInit() {
  }

}
