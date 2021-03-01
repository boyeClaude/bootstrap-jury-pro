import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-critere',
  templateUrl: './update-critere.component.html',
  styleUrls: ['./update-critere.component.scss'],
})
export class UpdateCritereComponent implements OnInit {
  UpdateCritereForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.UpdateCritereForm = this.fb.group({
      critere_libelle: [''],
      critere_bareme: [''],
    });
  }

  onUpdateCritere() {}
}
