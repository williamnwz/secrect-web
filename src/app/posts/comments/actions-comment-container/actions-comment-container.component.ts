import { Component, OnInit, Input } from '@angular/core';
import { Comment } from 'src/app/models/comment.model';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewCommentComponent } from '../new-comment/new-comment.component';

@Component({
  selector: 'actions-comment-container',
  templateUrl: './actions-comment-container.component.html',
  styleUrls: ['./actions-comment-container.component.css']
})
export class ActionsCommentContainerComponent implements OnInit {

  @Input()
  public Comments : Array<Comment> = [];
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  public newComment() {

   let modalRef = this.modalService.open(NewCommentComponent);
   let comment = new Comment();
   modalRef.componentInstance.comment = comment;

  }

}
