import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeSkillProgressBarComponent } from './about-me-skill-progress-bar.component';

describe('AboutMeSkillProgressBarComponent', () => {
  let component: AboutMeSkillProgressBarComponent;
  let fixture: ComponentFixture<AboutMeSkillProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMeSkillProgressBarComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeSkillProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
