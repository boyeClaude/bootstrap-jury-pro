import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .dark-modal .modal-content {
        background-color: #292b2c;
        color: white;
      }
      .dark-modal .close {
        color: white;
      }
      .light-blue-backdrop {
        background-color: #5cb3fd;
      }
    `,
  ],
})
export class ModalComponent implements OnInit {
  form: FormGroup;
  // rating;

  constructor(private modalService: NgbModal, private fb: FormBuilder) {
    // this.form = this.fb.group()
    this.form = this.fb.group({
      rating: ['', Validators.required],
      rating2: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }
}
