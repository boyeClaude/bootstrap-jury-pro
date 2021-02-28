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
import { JurysComponent } from './jurys/jurys.component';
import { CandidatsComponent } from './candidats/candidats.component';
import { ResultatsComponent } from './resultats/resultats.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { AjouterCritereComponent } from './criteres/ajouter-critere/ajouter-critere.component';
import { AjouterJuryComponent } from './jurys/ajouter-jury/ajouter-jury.component';
import { CandidatComponent } from './candidats/candidat/candidat.component';
import { AjouterCandidatComponent } from './candidats/ajouter-candidat/ajouter-candidat.component';
import { LoginUserComponent } from './users/login-user/login-user.component';

@NgModule({
  declarations: [
    AppComponent,
    EvenementsComponent,
    JuryProAcceuilComponent,
    EvenementComponent,
    AjouterEvenementComponent,
    ContainerEvenementsComponent,
    CriteresComponent,
    JurysComponent,
    CandidatsComponent,
    ResultatsComponent,
    AjouterCritereComponent,
    AjouterJuryComponent,
    CandidatComponent,
    AjouterCandidatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
