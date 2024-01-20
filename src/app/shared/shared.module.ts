import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SwitchLanguagesComponent } from './switch-languages/switch-languages.component';

import { TranslateService } from '@ngx-translate/core';
/**
 * Modulos necesarios para crear la página multilenguaje
 */
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SwitchLanguagesComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttLoaderFactory,
        deps:[HttpClient]
      }
    })
  ], exports: [
    NavbarComponent,
    FooterComponent,
    SwitchLanguagesComponent
  ]
})
export class SharedModule { }

export function HttLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http,'./assets/languages/','.json');
}
