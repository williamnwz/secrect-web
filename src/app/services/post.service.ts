import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Environment } from '../environment/Environment';

@Injectable()
export class PostService {

  constructor(
    private http : HttpClient, 
    private authService : AuthService,
    private userService : UserService) { 
  }

  public CreatePost(post : Post)  : any {
    let user = this.authService.GetAliasInfo();

    return this.http.post(Environment.ApiEndpoint + "v1/posts/new-post", {
      Description : post.description,
      Alias : user.Alias,
      ColorProfileUsed: user.Color
    }, this.userService.GetAuth()).toPromise();
  }

  public ListAllPosts() : any {
    let user = this.authService.GetAliasInfo();
    return this.http.get(Environment.ApiEndpoint + "v1/posts/list-posts", this.userService.GetAuth()).toPromise();
  }
  
}
