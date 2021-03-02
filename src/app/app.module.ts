import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EvenementsComponent } from './evenements/evenements.component';
import { JuryProAcceuilComponent } from './jury-pro-acceuil/jury-pro-acceuil.component';
import { EvenementComponent } from './evenements/evenement/evenement.component';
import { AjouterEvenementComponent } from './evenements/ajouter-evenement/ajouter-evenement.component';
import { ContainerEvenementsComponent } from './container-evenements/container-evenements.component';
import { CriteresComponent } from './criteres/criteres.component';
// import { JurysComponent } from './jurys/jurys.component';
import { CandidatsComponent } from './candidats/candidats.component';
import { ResultatsComponent } from './resultats/resultats.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { AjouterCritereComponent } from './criteres/ajouter-critere/ajouter-critere.component';
import { AjouterJuryComponent } from './jurys/ajouter-jury/ajouter-jury.component';
import { CandidatComponent } from './candidats/candidat/candidat.component';
import { AjouterCandidatComponent } from './candidats/ajouter-candidat/ajouter-candidat.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdateCritereComponent } from './criteres/update-critere/update-critere.component';
import { UpdateJuryComponent } from './jurys/update-jury/update-jury.component';
import { UpdateCandidatComponent } from './candidats/update-candidat/update-candidat.component';
import { ModalAlertComponent } from './shared/modal-alert/modal-alert.component';
import { UpdateEvenementComponent } from './evenements/update-evenement/update-evenement.component';

@NgModule({
  declarations: [
    AppComponent,
    EvenementsComponent,
    JuryProAcceuilComponent,
    EvenementComponent,
    AjouterEvenementComponent,
    ContainerEvenementsComponent,
    CriteresComponent,
    // JurysComponent,
    CandidatsComponent,
    ResultatsComponent,
    AjouterCritereComponent,
    AjouterJuryComponent,
    CandidatComponent,
    AjouterCandidatComponent,
    HeaderComponent,
    UpdateCritereComponent,
    UpdateJuryComponent,
    UpdateCandidatComponent,
    ModalAlertComponent,
    UpdateEvenementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatTabsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
