import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceCardHeaderComponent } from './experience-card-header.component';

describe('ExperienceCardHeaderComponent', () => {
  let component: ExperienceCardHeaderComponent;
  let fixture: ComponentFixture<ExperienceCardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceCardHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
