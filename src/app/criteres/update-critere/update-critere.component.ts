import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UpdateCritereService } from './update-critere.service';

@Component({
  selector: 'app-update-critere',
  templateUrl: './update-critere.component.html',
  styleUrls: ['./update-critere.component.scss'],
})
export class UpdateCritereComponent implements OnInit {
  UpdateCritereForm: FormGroup;
  critere: any;
  critereId;
  alert: boolean = false;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private updateCritereService: UpdateCritereService
  ) {}

  ngOnInit(): void {
    this.UpdateCritereForm = this.fb.group({
      critere_libelle: [''],
      critere_bareme: [''],
      evenement_id: [''],
    });

    this.getIdFromTheRoute();
  }

  getIdFromTheRoute() {
    this.route.paramMap.subscribe((params) => {
      this.critereId = +params.get('id');
      if (this.critereId) {
        this.getCritereById(this.critereId);
      }
    });
  }

  getCritereById(id) {
    return this.updateCritereService.getCritereById(id).subscribe((res) => {
      this.critere = res;
      console.log(this.critere);

      // update the form
      this.UpdateCritereForm.patchValue({
        critere_libelle: this.critere?.critere_libelle,
        critere_bareme: this.critere?.critere_bareme,
        evenement_id: this.critere?.evenement_id,
      });
    });
  }

  onUpdateCritere() {
    if (this.UpdateCritereForm.valid) {
      if (this.UpdateCritereForm.dirty) {
        // this.UpdateCritereForm.controls.evenement_id = +this.UpdateCritereForm.controls.evenement_id
        const critere = this.UpdateCritereForm.value;
        critere.critere_id = this.critereId;
        this.updateCritereService.updateCritere(critere).subscribe(
          (res) => console.log(res),
          (err) => console.log(err)
        );
        this.UpdateCritereForm.reset();
        this.alert = true;
        // console.log(critere);
      }
    }

    this.alertCloseAfterDelay();
  }

  alertClose() {
    this.alert = false;
  }

  alertCloseAfterDelay() {
    setTimeout(() => {
      this.alert = false;
    }, 5000);
  }
}
