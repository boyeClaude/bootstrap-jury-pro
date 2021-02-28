import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCritereComponent } from './ajouter-critere.component';

describe('AjouterCritereComponent', () => {
  let component: AjouterCritereComponent;
  let fixture: ComponentFixture<AjouterCritereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterCritereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterCritereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
