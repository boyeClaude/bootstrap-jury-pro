import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  constructor(
    private ajouterEvenementService: AjouterEvenementService,
    private fb: FormBuilder
  ) {}

  onFileSelect(event) {
    this.selectedFile = event.target.files[0];
  }

  ngOnInit(): void {
    this.evenementForm = this.fb.group({
      evenement_photo: [''],
      evenement_nom: [''],
      evenement_type: [''],
      evenement_date_debut: [''],
      evenement_date_fin: [''],
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
    }
  }
}
