

import { Component } from '@angular/core';
import { trigger, transition, animate, keyframes, style } from '@angular/animations';

@Component({
  selector: 'app-contentalgebra',
  templateUrl: './contentalgebra.component.html',
  styleUrls: ['./contentalgebra.component.css'],
  animations: [
    trigger('routeAnimation', [
      transition('* => void', [
        animate('0.5s', keyframes([
          style({ opacity: 1, offset: 0 }),
          style({ opacity: 0, offset: 1 })
        ]))
      ]),
      transition('void => *', [
        animate('0.5s', keyframes([
          style({ opacity: 0, offset: 0 }),
          style({ opacity: 1, offset: 1 })
        ]))
      ])
    ])
  ]
})
export class ContentalgebraComponent {
outlet: any;
  prepareRoute(outlet: any) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
