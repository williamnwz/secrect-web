import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'new-post-popup',
  templateUrl: './new-post-popup.component.html',
  styleUrls: ['./new-post-popup.component.css']
})
export class NewPostPopupComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
