import { Component } from '@angular/core';
//import { Injectable } from '@angular/core';
/*
@Injectable({
  providedIn: 'root',
})*/

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.css']
})
export class HeaderContainerComponent {

  mostrarLogin = false;
  login() {
    this.mostrarLogin = !this.mostrarLogin;
  }
}


