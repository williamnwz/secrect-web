import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Comment } from 'src/app/models/comment.model';

@Component({
  selector: 'new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {

  @Input() 
  public comment : Comment;
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

}
