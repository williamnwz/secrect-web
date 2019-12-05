import { Component, OnInit, Input, AfterViewInit, AfterViewChecked, DoCheck } from '@angular/core';
import { Comment } from 'src/app/models/comment.model';

@Component({
  selector: 'comment-container',
  templateUrl: './comment-container.component.html',
  styleUrls: ['./comment-container.component.css']
})
export class CommentContainerComponent implements OnInit {




  @Input()
  public Comments : Array<Comment> = [];

  @Input()
  public CanShowComments : boolean;

  constructor() { 
    console.log(this.CanShowComments)
    
  }

  ngOnInit() {
    
  }
 

}
