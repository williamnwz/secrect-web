import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewPostPopupComponent } from '../new-post-popup/new-post-popup.component';

@Component({
  selector: 'new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  public newPost() {
    let modalRef = this.modalService.open(NewPostPopupComponent);
    let postCreated = modalRef.result;
  }

}
