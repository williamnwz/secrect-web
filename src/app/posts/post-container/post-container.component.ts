import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';
import { NewPostPopupComponent } from '../new-post-popup/new-post-popup.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.css']
})
export class PostContainerComponent implements OnInit {

  @Input()
  public Posts : Array<Post> = [];

  constructor(private postService : PostService, private modalService: NgbModal) { }

  ngOnInit() {

    this.Posts = this.postService.ListAllPosts()
    .then((res : any)=>{
      if (!res || !res.posts){  
        this.Posts = [];
      }else{
        let posts = res.posts;
        this.Posts = posts.reverse();
      }
      
    });
  }

  public newPost() {
    
    let modalRef = this.modalService.open(NewPostPopupComponent);
    modalRef.result
    .then((post)=>{
      this.Posts.unshift(post);
    });
  }

}
