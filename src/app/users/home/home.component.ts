import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContainerEvenementsService } from 'src/app/container-evenements/container-evenements.service';
import { UpdateJuryService } from 'src/app/jurys/update-jury/update-jury.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  juryId;
  juryNomComplet;
  evenementId;
  evenement: any = {};
  critereByEvent: any = [];
  candidatsByEvent: any = [];
  constructor(
    private route: ActivatedRoute,
    private updateJuryService: UpdateJuryService,
    private containerEvenementService: ContainerEvenementsService,
    private homeService: HomeService
  ) {}

  ngOnInit(): void {
    this.readIdFromRoute();
  }

  readIdFromRoute() {
    this.route.paramMap.subscribe((params) => {
      this.juryId = +params.get('id');
      if (this.juryId) {
        this.getJuryById(this.juryId);
      }
    });
  }

  getJuryById(id) {
    this.updateJuryService.getJuryById(id).subscribe((res: any) => {
      this.evenementId = res?.evenement_id;
      this.juryNomComplet = res?.jury_nom_complet;
      if (this?.evenementId) {
        this.getEvenementById(this?.evenementId);
        this.getCritereForEachEvent(this?.evenementId);
        this.getCandidatsForEachEvent(this?.evenementId);
      }
    });
  }

  getEvenementById(evenementId) {
    this.containerEvenementService
      .getEvenementById(evenementId)
      .subscribe((res: any) => {
        this.evenement = res;
      });
  }

  getCritereForEachEvent(id) {
    this.homeService.getCriteresForEachEvent(id).subscribe((critere) => {
      this.critereByEvent = critere;
    });
  }

  getCandidatsForEachEvent(id) {
    this.homeService
      .getCandidatsForEcahEvent(id)
      .subscribe((candidat: any) => (this.candidatsByEvent = candidat));
  }
}
