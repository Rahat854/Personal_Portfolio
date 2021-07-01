import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMeRoutingModule } from './about-me-routing.module';
import { AboutMeComponent } from './about-me.component';
import { AboutMeHeaderComponent } from './about-me-header/about-me-header.component';
import { AboutMeServicesComponent } from './about-me-services/about-me-services.component';
import { AboutMeSkillsComponent } from './about-me-skills/about-me-skills.component';
import { AboutMeExperiencesComponent } from './about-me-experiences/about-me-experiences.component';
import { AboutMeCounterComponent } from './about-me-counter/about-me-counter.component';
import { AboutMeProjectsComponent } from './about-me-projects/about-me-projects.component';
import { AboutMeReferencesComponent } from './about-me-references/about-me-references.component';
import { ServiceCardComponent } from './about-me-services/service-card/service-card.component';


@NgModule({
  declarations: [
    AboutMeComponent,
    AboutMeHeaderComponent,
    AboutMeServicesComponent,
    AboutMeSkillsComponent,
    AboutMeExperiencesComponent,
    AboutMeCounterComponent,
    AboutMeProjectsComponent,
    AboutMeReferencesComponent,
    ServiceCardComponent
  ],
  imports: [
    CommonModule,
    AboutMeRoutingModule
  ]
})
export class AboutMeModule { }
