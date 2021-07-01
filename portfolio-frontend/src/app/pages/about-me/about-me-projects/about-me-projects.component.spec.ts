import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeProjectsComponent } from './about-me-projects.component';

describe('AboutMeProjectsComponent', () => {
  let component: AboutMeProjectsComponent;
  let fixture: ComponentFixture<AboutMeProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMeProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
