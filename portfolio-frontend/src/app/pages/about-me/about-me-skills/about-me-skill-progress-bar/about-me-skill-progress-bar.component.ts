import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me-skill-progress-bar',
  templateUrl: './about-me-skill-progress-bar.component.html',
  styleUrls: ['./about-me-skill-progress-bar.component.scss']
})
export class AboutMeSkillProgressBarComponent implements OnInit {

  @Input() title: string;
  @Input() level: number;

  constructor() { }

  ngOnInit(): void {
  }

}
