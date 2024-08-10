import { Component } from '@angular/core';

@Component({
  selector: 'app-contentMotivation',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentMotivationComponent {
  selectedPart:string = "Cosmos"
  hovered: number | null = null;
  texts: string[] = [
    "Carl Sagan",
    "Neil deGrasse"
  ];

  onMouseEnter(index: number) {
    this.hovered = index;
  }

  onMouseLeave() {
    this.hovered = null;
  }
}
