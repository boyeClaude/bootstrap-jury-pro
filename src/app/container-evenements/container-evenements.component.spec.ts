import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerEvenementsComponent } from './container-evenements.component';

describe('ContainerEvenementsComponent', () => {
  let component: ContainerEvenementsComponent;
  let fixture: ComponentFixture<ContainerEvenementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerEvenementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerEvenementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
