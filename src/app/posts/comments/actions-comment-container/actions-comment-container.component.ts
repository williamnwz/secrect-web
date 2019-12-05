import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Output()
  public AllowShowCommentEvent = new EventEmitter<boolean>();
  private AllowShowComment : boolean;

  constructor(private modalService: NgbModal) { 
  }

  ngOnInit() {
  }

  public newComment() {

   let modalRef = this.modalService.open(NewCommentComponent);
   let comment = new Comment();
   modalRef.componentInstance.comment = comment;

  }

  public ShowComments() {
    this.AllowShowComment = !this.AllowShowComment;
    this.AllowShowCommentEvent.emit(this.AllowShowComment);
  }




}
