import { Component,  OnInit, OnDestroy } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-algebra',
  templateUrl: './algebra.component.html',
  styleUrls: ['./algebra.component.css', './algebra.component.scss']
})
export class AlgebraComponent implements OnInit, OnDestroy{
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
