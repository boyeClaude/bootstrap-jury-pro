import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderJuryComponent } from './header-jury.component';

describe('HeaderJuryComponent', () => {
  let component: HeaderJuryComponent;
  let fixture: ComponentFixture<HeaderJuryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderJuryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderJuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
