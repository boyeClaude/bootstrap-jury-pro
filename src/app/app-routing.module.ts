import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjouterCandidatComponent } from './candidats/ajouter-candidat/ajouter-candidat.component';
import { UpdateCandidatComponent } from './candidats/update-candidat/update-candidat.component';
import { ContainerEvenementsComponent } from './container-evenements/container-evenements.component';
import { AjouterCritereComponent } from './criteres/ajouter-critere/ajouter-critere.component';
import { CriteresComponent } from './criteres/criteres.component';
import { UpdateCritereComponent } from './criteres/update-critere/update-critere.component';
import { AjouterEvenementComponent } from './evenements/ajouter-evenement/ajouter-evenement.component';
import { EvenementsComponent } from './evenements/evenements.component';
import { UpdateEvenementComponent } from './evenements/update-evenement/update-evenement.component';
import { JuryProAcceuilComponent } from './jury-pro-acceuil/jury-pro-acceuil.component';
import { AjouterJuryComponent } from './jurys/ajouter-jury/ajouter-jury.component';
// import { JurysComponent } from './jurys/jurys.component';
import { UpdateJuryComponent } from './jurys/update-jury/update-jury.component';
import { LoginUserComponent } from './users/login-user/login-user.component';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
  { path: '', component: JuryProAcceuilComponent },
  { path: 'evenements', component: EvenementsComponent },
  { path: 'ajouter-evenement', component: AjouterEvenementComponent },
  { path: 'update-evenement/:id', component: UpdateEvenementComponent },
  { path: 'container-evenements/:id', component: ContainerEvenementsComponent },
  { path: 'criteres', component: CriteresComponent },
  { path: 'ajouter-critere/:id', component: AjouterCritereComponent },
  { path: 'update-critere/:id', component: UpdateCritereComponent },
  // { path: 'jurys', component: JurysComponent },
  { path: 'ajouter-jury/:id', component: AjouterJuryComponent },
  { path: 'update-jury/:id', component: UpdateJuryComponent },
  { path: 'ajouter-candidat/:id', component: AjouterCandidatComponent },
  { path: 'update-candidat/:id', component: UpdateCandidatComponent },
  { path: 'login', component: LoginUserComponent },
  { path: '**', component: JuryProAcceuilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
