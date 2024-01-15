import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  mostrarTextoCompleto = false;
  toggleTextoCompleto() {
    this.mostrarTextoCompleto = !this.mostrarTextoCompleto;
  }
  toggleOcultarTexto(){
    this.mostrarTextoCompleto = false;
  }
}
