import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContainerEvenementsService } from './container-evenements.service';

@Component({
  selector: 'app-container-evenements',
  templateUrl: './container-evenements.component.html',
  styleUrls: ['./container-evenements.component.scss'],
})
export class ContainerEvenementsComponent implements OnInit {
  singleEvenement: any = {};
  criteres = [];
  juries = [];
  candidats = [];

  alert: boolean = false;

  success = 'Success';
  deleteMsgCritere = 'Critere supprimé avec succès';
  deleteMsgJury = 'Jury supprimé avec succès';
  deleteMsgCandidat = 'Candidat supprimé avec succès';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private containerEvenementService: ContainerEvenementsService
  ) {}

  ngOnInit(): void {
    this.readIdFromRoute();
    this.getAllCriteres();
    this.getAllCandidats();
    this.getAllJurys();
  }

  readIdFromRoute() {
    this.route.paramMap.subscribe((params) => {
      const eventId = +params.get('id');
      if (eventId) {
        this.getEvenementById(eventId);
      }
    });
  }

  getEvenementById(id) {
    this.containerEvenementService
      .getEvenementById(id)
      .subscribe((response: any) => {
        this.singleEvenement = response;
      });
  }

  getAllCriteres() {
    return this.containerEvenementService.getAllCriteres().subscribe((res) => {
      (this.criteres = res), console.log(this.criteres);

      (err: HttpErrorResponse) => {
        console.log(err.message);
      };
    });
  }

  getAllJurys() {
    this.containerEvenementService.getAllJurys().subscribe(
      (res) => {
        this.juries = res;
        console.log(res);
      },
      (err: HttpErrorResponse) => console.log(err.message)
    );
  }

  getAllCandidats() {
    this.containerEvenementService.getAllCandidats().subscribe(
      (res) => {
        console.log(res);
        this.candidats = res;
      },
      (err: HttpErrorResponse) => console.log(err.message)
    );
  }

  updateCritere(critereId) {
    this.router.navigate(['/update-critere', critereId]);
  }

  deleteCritere(critereId) {
    const message = confirm('Etes-vous sur de vouloir supprimer ce critere');
    if (message) {
      this.containerEvenementService
        .deleteCritere(critereId)
        .subscribe((res) => {
          console.log(res), this.getAllCriteres();
        });

      this.alert = true;
      this.alertCloseAfterDelay();
    }
  }

  updateJury(juryId) {
    this.router.navigate(['update-jury', juryId]);
  }

  deleteJury(juryId) {
    const message = confirm('Etes-vous sur de vouloir supprimer ce jury ');
    if (message) {
      this.containerEvenementService
        .deleteJury(juryId)
        .subscribe(() => this.getAllJurys());

      this.alert = true;
      this.alertCloseAfterDelay();
    }
  }

  updateCandidat(candidatId) {
    this.router.navigate(['/update-candidat', candidatId]);
  }

  deleteCandidat(candidatId) {
    console.log(candidatId);
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
