import { Component, OnInit, Input } from '@angular/core';
import { Comment } from 'src/app/models/comment.model';

@Component({
  selector: 'item-comment',
  templateUrl: './item-comment.component.html',
  styleUrls: ['./item-comment.component.css']
})
export class ItemCommentComponent implements OnInit {

  @Input()
  public Comment : Comment;

  constructor() { }

  ngOnInit() {
  }

}
