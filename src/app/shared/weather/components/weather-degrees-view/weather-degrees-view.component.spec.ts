import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDegreesViewComponent } from './weather-degrees-view.component';

describe('WeatherDegreesViewComponent', () => {
  let component: WeatherDegreesViewComponent;
  let fixture: ComponentFixture<WeatherDegreesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherDegreesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDegreesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
