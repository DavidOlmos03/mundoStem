import { Component} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  template: '<youtube-player videoId="mVjYG9TSN88"/>',
  styleUrls: ['./content.component.css'],
})
export class ContentMechanicsComponent{
  mostrarTextoCompleto = false;
  selectedPart:string = "Aristotle";
  toggleTextoCompleto() {
    this.mostrarTextoCompleto = !this.mostrarTextoCompleto;
  }
  toggleOcultarTexto(){
    this.mostrarTextoCompleto = false;
  }
  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
