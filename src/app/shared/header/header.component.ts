import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // Variables de la dataurl
  routeName: string = '';
  imageSrc: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ){ }
  ngOnInit(): void {
    this.route.params.subscribe(() => {
      this.updateRouteData();
    });

     // Escuchar los cambios de navegación
     this.router.events
     .pipe(filter(event => event instanceof NavigationEnd))
     .subscribe(() => {
       this.updateRouteData();
     });

  }


  updateRouteData():void{
    let currentRoute = this.route;

    // Navegando a la ultima ruta activa
    while (currentRoute.firstChild) {
      currentRoute = currentRoute.firstChild;
    }

    // Cargando la data url
    currentRoute.data.subscribe(data => {
      this.routeName = data['name'];
      this.imageSrc = data['imageSrc'];
      console.log('Datos de la ruta activa:', data);
    });
  }
}
