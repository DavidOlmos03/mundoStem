
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
  constructor(private http: HttpClient, private router: Router) { 
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
    this.changeTable(1,1)
  }

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


  changeTable(subjectId:number, topicId: number){
    /*
    * Se asignan los valores a subjectId y topicId, para emitirlos a componente table
    */
    this.subjectId = subjectId
    this.topicId = topicId     
    this.subjectChange.emit(this.subjectId)
    this.topicChange.emit(this.topicId)

    // Se clasifica según el subjectId
    if (this.subjectId==1){
      if(this.topicId == 1){
        this.tableName = "Calculus"
      }else if(this.topicId == 2){
        this.tableName = "Algebra"
      }else if(this.topicId == 3){
        this.tableName = "Vector Geometry"
      }else if(this.topicId == 4){
      this.tableName = "Calculus Motivation"
      }
    }
    if (this.subjectId==2){
      if(this.topicId == 1){
        this.tableName = "Mechanics"
      }else if(this.topicId == 2){
        this.tableName = "Electromagnetism"
      }else if(this.topicId == 3){
        this.tableName = "Computational Physics"
      }else if(this.topicId == 4){
      this.tableName = "Physics Motivation"
    }
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
