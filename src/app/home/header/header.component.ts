import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','./header.component.scss']
})
export class HeaderComponent {
  mostrarLogin = false;
  mostrarSingup = false;
  login() {
    this.mostrarLogin = !this.mostrarLogin;
    this.mostrarSingup = false;
  }
  signup() {
    this.mostrarSingup = !this.mostrarSingup;
    this.mostrarLogin = false;
  }
}
