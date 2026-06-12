import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsForRentComponent } from './cars-for-rent.component';

describe('CarsForRentComponent', () => {
  let component: CarsForRentComponent;
  let fixture: ComponentFixture<CarsForRentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarsForRentComponent]
    });
    fixture = TestBed.createComponent(CarsForRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
