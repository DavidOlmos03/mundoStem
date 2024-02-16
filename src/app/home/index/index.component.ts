import { Component, OnInit, OnDestroy } from '@angular/core';
import * as $ from 'jquery';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css','./index.component.scss']
})
export class IndexComponent implements OnInit, OnDestroy {

  ngOnInit() {
    const currentLanguage = localStorage.getItem('selectedLanguage');
    const confurmedTitle = currentLanguage === 'es' ? "Esto es mundoSteam!" : "This is MundoSteam!";
    const confirmedText = currentLanguage === 'es' ? "Esta página ha sido creada con el fin de compartir conocimiento y experiencias, de una forma agradable para todos los que la visitan" : "This page has been created in order to share knowledge and experiences, in a pleasant way for all who visit it.";


    $(window).on('scroll', this.handleScroll);

    Swal.fire({
      title: confurmedTitle,
      text: confirmedText,
      imageUrl:"https://img.freepik.com/free-vector/flat-children-back-school_52683-42315.jpg?w=740&t=st=1706415993~exp=1706416593~hmac=6f2dc21cfe56635e16b191117d3c12e227d97859d4b54b6fdc1ad20e96409805",
      imageHeight: 200,
      imageAlt: "Students"
    })
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



