import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { Comment } from 'src/app/models/comment.model';

@Component({
  selector: 'item-post',
  templateUrl: './item-post.component.html',
  styleUrls: ['./item-post.component.css']
})
export class ItemPostComponent implements OnInit {

  public post : Post;

  constructor() { 

    this.post = new Post();
    this.post.Alias = "@username";
    this.post.Comments = [];
    this.post.Create = new Date();
    this.post.Description = "Apenas um teste abc123 para posts";
    this.post.Id = "123";

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
    this.post.Comments.push(c1);
    this.post.Comments.push(c2);
    
  }

  ngOnInit() {
  }

}
