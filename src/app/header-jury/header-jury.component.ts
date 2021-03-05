import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-jury',
  templateUrl: './header-jury.component.html',
  styleUrls: ['./header-jury.component.scss'],
})
export class HeaderJuryComponent implements OnInit {
  @Input() nomComplet;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.router.navigate(['/evenements']);
  }
}
