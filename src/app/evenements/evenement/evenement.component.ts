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

  editEvent(value) {
    console.log(value);
  }

  deleteEvent(value) {
    console.log(value);
  }

  sendEventId(eventId) {
    this._router.navigate(['/container-evenements', eventId]);
  }
}
