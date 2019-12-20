import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostService } from 'src/app/services/post.service';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Post } from 'src/app/models/post.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'new-post-popup',
  templateUrl: './new-post-popup.component.html',
  styleUrls: ['./new-post-popup.component.css']
})
export class NewPostPopupComponent implements OnInit {

  public newPostFrom : FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private postService : PostService,
    public formBuilder : FormBuilder,
    private userService : UserService) {
  }


  ngOnInit() {

    this.newPostFrom = this.formBuilder.group({
      description : ['', Validators.required]
    });
  }

  public save(){
    const description = this.newPostFrom.get('description').value;
    let post = new Post();
    post.description = description;
    let user = this.userService.GetLoggedUser();
    post.alias = user.Alias;
    post.colorProfileUsed = user.Color;
    post.id = user.Id;

    this.postService.CreatePost(post);
  }

}
