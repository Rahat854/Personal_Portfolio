import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me-experiences',
  templateUrl: './about-me-experiences.component.html',
  styleUrls: ['./about-me-experiences.component.scss']
})
export class AboutMeExperiencesComponent implements OnInit {
  experiences: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.experiences = [
      {
        title: 'UX Specialist',
        description: '2008 - 2010. Digital Art Company',
        image: 'left-up-dot-right-down'
      },
      {
        title: 'Web Designer',
        description: '2010 - 2013. Marketing Agency',
        image: 'screenshot'
      },
      {
        title: 'Technical CTO',
        description: '2013 - 2015. Keydesign Agency',
        image: 'ux-design'
      },
      {
        title: 'Freelancer',
        description: '2015 - Present. Envato Market',
        image: 'ux-roadmap'
      },
    ];
  }

}
