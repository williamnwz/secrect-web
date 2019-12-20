import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { Comment } from 'src/app/models/comment.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.css']
})
export class PostContainerComponent implements OnInit {

  @Input()
  public Posts : Array<Post> = [];

  constructor(private postService : PostService) { }

  ngOnInit() {

    this.Posts = this.postService.ListAllPosts()
    .then((res : any)=>{
      if (!!!res || !!!res.posts){  
        this.Posts = [];
      }else{
        this.Posts = res.posts;
      }
      
    });
  }

}
