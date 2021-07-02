import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent implements OnInit {
  @Input() image: string;
  @Input() serial: number;
  @Input() description: string;
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
