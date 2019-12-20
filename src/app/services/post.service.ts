import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';

const API_URL = "http://localhost:58187/";

@Injectable()
export class PostService {

  constructor(
    private http : HttpClient, 
    private authService : AuthService,
    private userService : UserService) { 
  }

  public CreatePost(post : Post)  : any {
    let user = this.authService.GetAliasInfo();

    return this.http.post(API_URL + "v1/posts/new-post", {
      Description : post.description,
      Alias : user.Alias,
      ColorProfileUsed: user.Color
    }, this.userService.GetAuth()).toPromise();
  }

  public ListAllPosts() : any {
    let user = this.authService.GetAliasInfo();
    return this.http.get(API_URL + "v1/posts/list-posts", this.userService.GetAuth())
    .toPromise();
  }
  
}
