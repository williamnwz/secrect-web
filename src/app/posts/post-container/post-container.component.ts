import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { Comment } from 'src/app/models/comment.model';

@Component({
  selector: 'post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.css']
})
export class PostContainerComponent implements OnInit {

  @Input()
  public Posts : Array<Post> = [];

  constructor() { }

  ngOnInit() {

    let post = new Post();
    post.Alias = "@username";
    post.Comments = [];
    post.Create = new Date();
    post.Description = "Apenas um teste abc123 para posts";
    post.Id = "123";

    let c1 = new Comment();
    c1.Alias = "@Alias";
    c1.Create = new Date();
    c1.Description = "Apenas um teste de comentario";
    c1.Id = "123111";

    let c2 = new Comment();
    c2.Alias = "@Alias2";
    c2.Create = new Date();
    c2.Description = "ASDbasd asd asd  ";
    c2.Id = "123111";
    post.Comments.push(c1);
    post.Comments.push(c2);

    this.Posts.push(post);
    this.Posts.push(post);
    this.Posts.push(post);

  }

}
