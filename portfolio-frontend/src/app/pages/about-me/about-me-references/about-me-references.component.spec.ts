import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeReferencesComponent } from './about-me-references.component';

describe('AboutMeReferencesComponent', () => {
  let component: AboutMeReferencesComponent;
  let fixture: ComponentFixture<AboutMeReferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMeReferencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
