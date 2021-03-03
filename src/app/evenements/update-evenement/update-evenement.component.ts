import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UpdateEvenementService } from './update-evenement.service';

@Component({
  selector: 'app-update-evenement',
  templateUrl: './update-evenement.component.html',
  styleUrls: ['./update-evenement.component.scss'],
})
export class UpdateEvenementComponent implements OnInit {
  updateEvenementForm: FormGroup;
  evenementType = ['candidat', 'groupe'];
  selectedFile = null;

  alert: boolean = false;
  eventId;
  event;
  constructor(
    private fb: FormBuilder,
    private updateEvenementService: UpdateEvenementService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.updateEvenementForm = this.fb.group({
      evenement_photo: [],
      evenement_nom: ['', Validators.required],
      evenement_type: ['', Validators.required],
      evenement_date_debut: ['', Validators.required],
      evenement_date_fin: ['', Validators.required],
      evenement_id: [],
    });

    this.readIdFromRoute();
  }

  onFileSelect(event) {
    this.selectedFile = event.target.files[0];
  }

  readIdFromRoute() {
    this.route.paramMap.subscribe((params) => {
      this.eventId = +params.get('id');
      if (this.eventId) {
        this.getEvenementById(this.eventId);
      }
    });
  }

  getEvenementById(id) {
    this.updateEvenementService.getEventById(id).subscribe((response: any) => {
      this.event = response;

      //update the form
      this.updateEvenementForm.patchValue({
        // evenement_photo: this.event?.evenement_photo,
        evenement_nom: this.event?.evenement_nom,
        evenement_type: this.event?.evenement_type,
        evenement_date_debut: this.event?.evenement_date_debut,
        evenement_date_fin: this.event?.evenement_date_fin,
        evenement_id: this.event?.evenement_id,
      });
    });
  }

  onUpdateEvenement() {
    // if (this.updateEvenementForm.dirty) {
    //   let evenement = this.updateEvenementForm.value;
    //   if (this.selectedFile == null) {
    //     console.log(evenement);
    //     evenement.evenement_photo = this.event?.evenement_photo;
    //   }
    //   console.log('avec photo', evenement);
    // }
  }

  // alertClose() {
  //   this.alert = true;
  // }
}
