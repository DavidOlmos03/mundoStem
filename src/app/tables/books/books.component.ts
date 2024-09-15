
import { Component, EventEmitter, Output, OnInit,OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-books-grid',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css', './books.component.scss']
})
export class BooksGridComponent implements OnInit,OnDestroy {
  tableName:string = "calculus"
  subjectId:number = 1
  topicId:number = 1
  constructor(private http: HttpClient, private router: Router) { }
  /**
   * Se verifica que el usuario no este logueado para que pueda acceder al login
   */
  logueadoFunction() {
    return localStorage.getItem('acceso');
  }


  /**
   * Para el contenedor lateral
   */
  @Output() subjectChange = new EventEmitter<number>();
  @Output() topicChange = new EventEmitter<number>();


  changeTable(subjectId:number = 1, topicId: number = 1){
    this.subjectId = subjectId
    this.topicId = topicId
    this.subjectChange.emit(this.subjectId)
    this.topicChange.emit(this.topicId)

    if(this.topicId == 1){
      this.topicId = 1
    }else if(this.topicId == 2){
      this.topicId = 2
    }
  }



  ngOnInit() {
    /**
     * Para controlar el scroll en en header y este se oculte
     */
    $(window).on('scroll', this.handleScroll);
    /**
     * Desde que se inicia la página se verifica si el usuario esta logueado o no
     */
    if (!this.logueadoFunction()) {
        //this.router.navigate(['']);
    }
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
