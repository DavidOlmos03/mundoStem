import { Component} from '@angular/core';

@Component({
  selector: 'app-contentElectromagnetism',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentElectromagnetismComponent {
  mostrarTextoCompleto = false;
  selectedPart:string = "Discovery";
  toggleTextoCompleto() {
    this.mostrarTextoCompleto = !this.mostrarTextoCompleto;
  }
  toggleOcultarTexto(){
    this.mostrarTextoCompleto = false;
  }

}
