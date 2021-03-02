import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UpdateJuryService } from './update-jury.service';

@Component({
  selector: 'app-update-jury',
  templateUrl: './update-jury.component.html',
  styleUrls: ['./update-jury.component.scss'],
})
export class UpdateJuryComponent implements OnInit {
  jury;
  juryId;
  updateJuryForm: FormGroup;

  alert: boolean = false;

  constructor(
    private updateJuryService: UpdateJuryService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.updateJuryForm = this.fb.group({
      code_id: [''],
      jury_email: [''],
      jury_nom_complet: [''],
      jury_telephone: [''],
      evenement_id: [],
      jury_id: [],
    });
    this.getIdFromTheRoute();
  }

  getIdFromTheRoute() {
    this.route.paramMap.subscribe((params) => {
      this.juryId = +params.get('id');
      if (this.juryId) {
        this.getJuryById(this.juryId);
      }
    });
  }

  getJuryById(id) {
    return this.updateJuryService.getJuryById(id).subscribe((res) => {
      this.jury = res;

      // update the form
      this.updateJuryForm.patchValue({
        code_id: this.jury?.code_id,
        jury_email: this.jury?.jury_email,
        jury_nom_complet: this.jury?.jury_nom_complet,
        jury_telephone: this.jury?.jury_telephone,
        evenement_id: this.jury?.evenement_id,
      });
    });
  }

  onUpdateJury() {
    if (this.updateJuryForm.valid) {
      if (this.updateJuryForm.dirty) {
        const jury = this.updateJuryForm.value;
        jury.jury_id = this.juryId;
        this.updateJuryService.updateJury(jury).subscribe(
          (res) => console.log(res),
          (err) => console.log(err)
        );

        this.updateJuryForm.reset();
        this.alert = true;
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
