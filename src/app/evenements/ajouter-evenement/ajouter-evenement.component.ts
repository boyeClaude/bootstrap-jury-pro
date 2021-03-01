import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AjouterEvenementService } from './ajouter-evenement.service';

@Component({
  selector: 'app-ajouter-evenement',
  templateUrl: './ajouter-evenement.component.html',
  styleUrls: ['./ajouter-evenement.component.scss'],
})
export class AjouterEvenementComponent implements OnInit {
  evenementForm: FormGroup;
  evenementType = ['candidat', 'groupe'];
  selectedFile: File = null;
  alert: boolean = false;

  constructor(
    private ajouterEvenementService: AjouterEvenementService,
    private fb: FormBuilder
  ) {}

  onFileSelect(event) {
    this.selectedFile = event.target.files[0];
  }

  ngOnInit(): void {
    this.evenementForm = this.fb.group({
      evenement_photo: ['', Validators.required],
      evenement_nom: ['', Validators.required],
      evenement_type: ['', Validators.required],
      evenement_date_debut: ['', Validators.required],
      evenement_date_fin: ['', Validators.required],
    });
  }

  onSaveEvenement() {
    if (this.evenementForm.valid) {
      let formadata: FormData = new FormData();
      delete this.evenementForm.value.evenement_photo;
      formadata.append('file', this.selectedFile);
      formadata.append('evenement', JSON.stringify(this.evenementForm.value));
      this.ajouterEvenementService.addEvenement(formadata).subscribe(
        (res) => console.log(res),
        (error) => console.log(error)
      );
      this.evenementForm.reset();
      this.alert = true;
    }
  }

  alertClose() {
    this.alert = false;
    console.log(this.alert);
  }

  // alertCloseAfterDelay() {
  //   setTimeout(() => {
  //     this.alert = false;
  //   }, 1000);
  // }
}
