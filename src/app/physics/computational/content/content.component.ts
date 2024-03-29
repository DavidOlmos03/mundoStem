import { Component } from '@angular/core';

@Component({
  selector: 'app-contentComputational',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComputationalComponent {
  selectedPart:string = "1940-1950";
  hovered: number | null = null;
  texts: string[] = [
    "Colossus de Reino Unido",
    "ENIAC de Estados Unidos",
    "Libro de Juan-Antonio Infante y José María Rey",
    "Simulación del comportamiento de un fluido",
    "High-level programming language that has played a pivotal role in the development of scientific and engineering applications",
    "The first proton-lead collisions of 2013 send showers of particles through the ALICE detector (Image: CERN)"
  ];

  onMouseEnter(index: number) {
    this.hovered = index;
  }

  onMouseLeave() {
    this.hovered = null;
  }
}
