import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  // standalone: true,
  // imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit {
  lastWorld:string = 'login'
  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    // this.routeName()
  }

  routeName(): any{
    // const route = this.router.url
    // const segRoute = route.split('/')
    // this.lastWorld = segRoute.pop()
    // Cambiar la ruta y actualizar lastWorld
    if (this.lastWorld === 'login') {
      this.router.navigate(['auth/registro']);
      this.lastWorld = 'registro';
    } else {
      this.router.navigate(['auth/login']);
      this.lastWorld = 'login';
    }
  }
}
