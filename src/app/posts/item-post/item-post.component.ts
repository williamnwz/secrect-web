import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { Comment } from 'src/app/models/comment.model';

@Component({
  selector: 'item-post',
  templateUrl: './item-post.component.html',
  styleUrls: ['./item-post.component.css']
})
export class ItemPostComponent implements OnInit {

  @Input()
  public Post : Post;

  @Input()
  public CanShowComments : boolean;

  constructor() { 
    this.CanShowComments = false;
  }

  ngOnInit() {
  }

  public ReciveAllowShowComments($event){
   
    this.CanShowComments = $event;
  }
}
