import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { AjouterCritereService } from './ajouter-critere.service';

@Component({
  selector: 'app-ajouter-critere',
  templateUrl: './ajouter-critere.component.html',
  styleUrls: ['./ajouter-critere.component.scss'],
})
export class AjouterCritereComponent implements OnInit {
  evenementId;
  critereForm: FormGroup;
  alert: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private _fb: FormBuilder,
    private ajouterCritereService: AjouterCritereService
  ) {}

  ngOnInit(): void {
    this.critereForm = this._fb.group({
      critere_bareme: ['', Validators.required],
      critere_libelle: ['', Validators.required],
      evenement_id: [],
    });

    this.readIdEventFromRoute();
  }

  readIdEventFromRoute() {
    this.route.paramMap.subscribe((params) => {
      this.evenementId = +params.get('id');
    });
  }

  onSaveCritere() {
    if (this.critereForm.valid) {
      this.critereForm.controls.evenement_id.setValue(this.evenementId);
      const critere = this.critereForm.value;
      this.ajouterCritereService.ajouterCritere(critere).subscribe((res) => {
        console.log(res), (err: HttpErrorResponse) => console.log(err);
      });

      this.critereForm.reset();
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
