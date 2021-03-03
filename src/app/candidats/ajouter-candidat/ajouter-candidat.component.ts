import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AjouterCandidatService } from './ajouter-candidat.service';

@Component({
  selector: 'app-ajouter-candidat',
  templateUrl: './ajouter-candidat.component.html',
  styleUrls: ['./ajouter-candidat.component.scss'],
})
export class AjouterCandidatComponent implements OnInit {
  candidatForm: FormGroup;
  candidatEventType = [];
  selectedCandidatPhoto: File = null;

  alert: boolean = false;
  evenementId;

  constructor(
    private fb: FormBuilder,
    private ajouterCandidatService: AjouterCandidatService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.candidatForm = this.fb.group({
      candidat_code: ['', Validators.required],
      candidat_email: ['', Validators.required],
      candidat_nom: ['', Validators.required],
      candidat_prenom: ['', Validators.required],
      candidat_telephone: ['', Validators.required],
      candidat_photo: ['', Validators.required],
      evenement_id: [],
    });

    this.readIdEventFromRoute();
  }

  readIdEventFromRoute() {
    this.route.paramMap.subscribe((params) => {
      this.evenementId = +params.get('id');
    });
  }

  onFileSelectCandidatPhoto(event) {
    this.selectedCandidatPhoto = event.target.files[0];
  }

  onSaveCandidat() {
    const formdata: FormData = new FormData();
    if (this.candidatForm.valid) {
      // console.log(this.candidatForm.value);

      this.candidatForm.controls.evenement_id.setValue(this.evenementId);
      const candidat = this.candidatForm.value;
      delete candidat.candidat_photo;

      console.log(candidat);

      formdata.append('file', this.selectedCandidatPhoto);
      formdata.append('candidat', JSON.stringify(candidat));
      this.ajouterCandidatService.addCandidat(formdata).subscribe(
        (res) => console.log(res),
        (err: HttpErrorResponse) => console.log(err.message)
      );

      this.candidatForm.reset();
      this.alert = true;
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
