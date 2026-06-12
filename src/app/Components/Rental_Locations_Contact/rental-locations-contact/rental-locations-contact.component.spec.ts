import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalLocationsContactComponent } from './rental-locations-contact.component';

describe('RentalLocationsContactComponent', () => {
  let component: RentalLocationsContactComponent;
  let fixture: ComponentFixture<RentalLocationsContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentalLocationsContactComponent]
    });
    fixture = TestBed.createComponent(RentalLocationsContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
