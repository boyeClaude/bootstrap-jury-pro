import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EvenementService } from './evenement.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.scss'],
})
export class EvenementComponent implements OnInit {
  evenements = [];
  alert: boolean = false;

  constructor(
    private evenementService: EvenementService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getAllEvenements();
  }

  getAllEvenements() {
    this.evenementService.getAllEvenements().subscribe((response) => {
      (this.evenements = response), (error) => console.log(error);
    });
  }

  editEvent(eventId) {
    this._router.navigate(['/update-evenement', eventId]);
  }

  deleteEvent(value) {
    const message = confirm('Etes-vous sur de vouloir supprimer cet evenement');
    if (message) {
      this.evenementService.deleteEvenement(value).subscribe((res) => {
        this.getAllEvenements();
      });

      this.alert = true;
    }

    this.alertCloseAfterDelay();
  }

  sendEventId(eventId) {
    this._router.navigate(['/container-evenements', eventId]);
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
