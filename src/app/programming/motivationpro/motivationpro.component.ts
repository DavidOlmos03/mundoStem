import { Component, OnInit, OnDestroy } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-motivationpro',
  templateUrl: './motivationpro.component.html',
  styleUrls: ['./motivationpro.component.css', './motivationpro.component.scss']
})


export class MotivationproComponent implements OnInit, OnDestroy{
  ngOnInit() {
    $(window).on('scroll', this.handleScroll);
  }

  ngOnDestroy() {
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

