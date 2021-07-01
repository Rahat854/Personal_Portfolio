import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeCounterComponent } from './about-me-counter.component';

describe('AboutMeCounterComponent', () => {
  let component: AboutMeCounterComponent;
  let fixture: ComponentFixture<AboutMeCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMeCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
