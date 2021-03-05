import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginJuryService } from './login-user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss'],
})
export class LoginUserComponent implements OnInit {
  loginJuryForm: FormGroup;

  constructor(
    private loginJuryService: LoginJuryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginJuryForm = new FormGroup({
      jury_telephone: new FormControl('', Validators.required),
    });
  }

  getJuryByTelephone(value) {
    this.loginJuryService.getJuryByTelephone(value).subscribe((res) => {
      if (res) {
        this.router.navigate(['/user', res.jury_id]);
      } else {
        alert('pas de jury');
      }
    });
  }

  onLoginJury() {
    const juryTelephone = this.loginJuryForm.get('jury_telephone').value;
    this.getJuryByTelephone(juryTelephone);
  }
}
