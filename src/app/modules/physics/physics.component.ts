import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-physics',
  templateUrl: './physics.component.html',
  styleUrls: ['./physics.component.css','./physics.component.scss']
})
export class PhysicsComponent implements OnInit,OnDestroy {
  // Variables de la dataurl
  routeName: string = '';
  imageSrc: string = '';

  constructor(
    private router: Router
  ){

  }

  ngOnInit(): void {
    $(window).on('scroll', this.handleScroll);
  }

  ngOnDestroy(): void {
    $(window).off('scroll', this.handleScroll);
  }

  handleScroll() {
    const winTop: number = $(window).scrollTop() || 0;

    if (winTop >= 30) {
      $('body').addClass('sticky-header');
    } else {
      $('body').removeClass('sticky-header');
    }
  }
}
