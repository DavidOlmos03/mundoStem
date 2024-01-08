/*import { Component } from '@angular/core';

@Component({
  selector: 'app-lateral',
  templateUrl: './lateral.component.html',
  styleUrls: ['./lateral.component.css']
})
export class LateralComponent {

}*/

import { Component, OnInit, OnDestroy, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-lateral',
  templateUrl: './lateral.component.html',
  styleUrls: ['./lateral.component.css']
})
export class LateralComponent implements OnInit, OnDestroy {
  private resizeListener: () => void = () => {}; // Inicialización por defecto
  public isCarouselMode: boolean = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    // Escucha el evento de cambio de tamaño de pantalla
    this.resizeListener = this.renderer.listen('window', 'resize', () => {
      this.checkScreenWidth();
    });

    // Verifica el tamaño de la pantalla al cargar el componente
    this.checkScreenWidth();
  }

  ngOnDestroy(): void {
    // Limpia el oyente al destruir el componente
    this.resizeListener();
  }

  private checkScreenWidth(): void {
    const screenWidth = window.innerWidth;

    // Decide si mostrar el lateral normal o como carrusel basado en el ancho de la pantalla
    this.isCarouselMode = screenWidth < 993;

    if (this.isCarouselMode) {
      this.convertToCarousel();
    } else {
      this.convertToNormal();
    }
  }

  private convertToCarousel(): void {
    // Ocultar el lateral normal
    this.renderer.setStyle(this.el.nativeElement.querySelector('.lateral-container'), 'display', 'none');
  
    // Mostrar el carrusel
    this.renderer.setStyle(this.el.nativeElement.querySelector('#carouselExampleCaptions'), 'display', '');
  
    console.log('Convertir a carrusel');
  }
  
  private convertToNormal(): void {
    // Ocultar el carrusel
    this.renderer.setStyle(this.el.nativeElement.querySelector('#carouselExampleCaptions'), 'display', 'none');
  
    // Mostrar el lateral normal
    this.renderer.setStyle(this.el.nativeElement.querySelector('.lateral-container'), 'display', '');
  
    console.log('Convertir a lateral normal');
  }


  
}