import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeExperiencesComponent } from './about-me-experiences.component';

describe('AboutMeExperiencesComponent', () => {
  let component: AboutMeExperiencesComponent;
  let fixture: ComponentFixture<AboutMeExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMeExperiencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
