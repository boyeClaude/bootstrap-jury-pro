import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-alert',
  templateUrl: './modal-alert.component.html',
  styleUrls: ['./modal-alert.component.scss'],
})
export class ModalAlertComponent implements OnInit {
  @Input() alertMessage: string;
  @Input() message: string;
  @Input() alert: boolean;
  @Input() success: boolean = true;

  @Output() alertClose = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onAlertClose() {
    this.alertClose.emit();
  }
}
