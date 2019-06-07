import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(public modal: NgbActiveModal,
              private router : Router,
              private _modalService : NgbModal) {}

  ngOnInit() {
  }

  goRegister(){
    this._modalService.dismissAll();
    this.router.navigate(['register']);
  }

}
