import { Component, OnInit, Input } from '@angular/core';
import { Comment } from 'src/app/models/comment.model';

@Component({
  selector: 'comment-container',
  templateUrl: './comment-container.component.html',
  styleUrls: ['./comment-container.component.css']
})
export class CommentContainerComponent implements OnInit {

  @Input()
  public Comments : Array<Comment> = [];

  constructor() { }

  ngOnInit() {
  }

}
