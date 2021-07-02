import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-card-header',
  templateUrl: './experience-card-header.component.html',
  styleUrls: ['./experience-card-header.component.scss']
})
export class ExperienceCardHeaderComponent implements OnInit {
  @Input() serial: number;
  @Input() image: string;

  constructor() { }

  ngOnInit(): void {
  }

}
