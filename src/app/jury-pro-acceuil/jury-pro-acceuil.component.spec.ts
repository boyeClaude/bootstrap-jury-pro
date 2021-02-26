import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuryProAcceuilComponent } from './jury-pro-acceuil.component';

describe('JuryProAcceuilComponent', () => {
  let component: JuryProAcceuilComponent;
  let fixture: ComponentFixture<JuryProAcceuilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuryProAcceuilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuryProAcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
