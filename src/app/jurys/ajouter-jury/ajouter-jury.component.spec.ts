import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterJuryComponent } from './ajouter-jury.component';

describe('AjouterJuryComponent', () => {
  let component: AjouterJuryComponent;
  let fixture: ComponentFixture<AjouterJuryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterJuryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterJuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
