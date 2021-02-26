import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JurysComponent } from './jurys.component';

describe('JurysComponent', () => {
  let component: JurysComponent;
  let fixture: ComponentFixture<JurysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JurysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JurysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
