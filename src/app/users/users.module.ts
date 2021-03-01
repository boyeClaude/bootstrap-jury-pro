import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginUserComponent } from './login-user/login-user.component';
import { UsersRoutingModule } from './users-routing.module';
import { HomeComponent } from './home/home.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HeaderJuryComponent } from '../header-jury/header-jury.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [UsersRoutingModule, CommonModule, MatTabsModule],
  exports: [],
  declarations: [LoginUserComponent, HomeComponent, HeaderJuryComponent, ModalComponent],
  providers: [],
})
export class UsersModule {}
