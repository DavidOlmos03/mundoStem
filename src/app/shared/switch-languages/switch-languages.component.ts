import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-switch-languages',
  templateUrl: './switch-languages.component.html',
  styleUrls: ['./switch-languages.component.css']
})
export class SwitchLanguagesComponent {
  options=[
    {value:'en',display:'English'},
    {value:'es',display:'Español'}
  ]
  selectedLanguage: string;

  constructor(private translate: TranslateService) {
    // Obtener el idioma almacenado en el almacenamiento local al inicio
    this.selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';
  }

  ngOnInit() {
    // Establecer el idioma al iniciar el componente
    this.translate.use(this.selectedLanguage);
  }

  onChange = (event: Event) => {
    // Obtener el idioma seleccionado
    const lang = (event.target as HTMLSelectElement).value;

    // Establecer el idioma
    this.translate.use(lang);

    // Almacenar el idioma seleccionado en el almacenamiento local
    localStorage.setItem('selectedLanguage', lang);
  }
}
