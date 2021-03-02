import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AjouterJuryService } from './ajouter-jury.service';

@Component({
  selector: 'app-ajouter-jury',
  templateUrl: './ajouter-jury.component.html',
  styleUrls: ['./ajouter-jury.component.scss'],
})
export class AjouterJuryComponent implements OnInit {
  alert: boolean = false;
  juryForm: FormGroup;
  evenementId;
  constructor(
    private ajouterJuryService: AjouterJuryService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.juryForm = this.fb.group({
      code_id: ['', Validators.required],
      jury_email: ['', Validators.required],
      jury_nom_complet: ['', Validators.required],
      jury_telephone: ['', Validators.required],
      evenement_id: [],
    });

    this.readIdEventFromRoute();
  }

  readIdEventFromRoute() {
    this.route.paramMap.subscribe((params) => {
      this.evenementId = +params.get('id');
    });
  }

  onSaveJury() {
    if (this.juryForm.valid) {
      this.juryForm.controls.evenement_id.setValue(this.evenementId);
      const jury = this.juryForm.value;
      this.ajouterJuryService.saveJury(jury).subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );

      this.juryForm.reset();
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
