import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjouterCandidatComponent } from './candidats/ajouter-candidat/ajouter-candidat.component';
import { ContainerEvenementsComponent } from './container-evenements/container-evenements.component';
import { AjouterCritereComponent } from './criteres/ajouter-critere/ajouter-critere.component';
import { CriteresComponent } from './criteres/criteres.component';
import { AjouterEvenementComponent } from './evenements/ajouter-evenement/ajouter-evenement.component';
import { EvenementsComponent } from './evenements/evenements.component';
import { JuryProAcceuilComponent } from './jury-pro-acceuil/jury-pro-acceuil.component';
import { AjouterJuryComponent } from './jurys/ajouter-jury/ajouter-jury.component';
import { JurysComponent } from './jurys/jurys.component';
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
  { path: 'container-evenements', component: ContainerEvenementsComponent },
  { path: 'criteres', component: CriteresComponent },
  { path: 'ajouter-critere', component: AjouterCritereComponent },
  { path: 'jurys', component: JurysComponent },
  { path: 'ajouter-jury', component: AjouterJuryComponent },
  { path: 'ajouter-candidat', component: AjouterCandidatComponent },
  { path: '**', component: JuryProAcceuilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
