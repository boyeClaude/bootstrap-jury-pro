import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerEvenementsComponent } from './container-evenements/container-evenements.component';
import { CriteresComponent } from './criteres/criteres.component';
import { AjouterEvenementComponent } from './evenements/ajouter-evenement/ajouter-evenement.component';
import { EvenementsComponent } from './evenements/evenements.component';
import { JuryProAcceuilComponent } from './jury-pro-acceuil/jury-pro-acceuil.component';
import { JurysComponent } from './jurys/jurys.component';

const routes: Routes = [
  { path: '', component: JuryProAcceuilComponent },
  { path: 'evenements', component: EvenementsComponent },
  { path: 'ajouter-evenement', component: AjouterEvenementComponent },
  { path: 'container-evenements', component: ContainerEvenementsComponent },
  { path: 'criteres', component: CriteresComponent },
  { path: 'jurys', component: JurysComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
