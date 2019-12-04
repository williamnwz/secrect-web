import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-logged-container',
  templateUrl: './logged-container.component.html',
  styleUrls: ['./logged-container.component.css']
})
export class LoggedContainerComponent implements OnInit {

  public Posts : Array<Post> = [];

  constructor() { }

  ngOnInit() {
  }

}
