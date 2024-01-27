import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { LateralComponent } from './lateral/lateral.component';
import { ContentComponent } from './content/content.component';
import { SharedModule } from '../shared/shared.module';
//import { ContentWrapContainerComponent } from './content-wrap-container/content-wrap-container.component';
/**
 * Modulos necesarios para crear la página multilenguaje
 */
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    IndexComponent,
    HeaderComponent,
    LateralComponent,
    ContentComponent
     //ContentWrapContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttLoaderFactory,
        deps:[HttpClient]
      }
    })
  ],
  exports: [
<<<<<<< HEAD
    FooterComponent,
    IndexComponent,
    HeaderComponent,
    NavbarComponent,
    ContentComponent

=======
    IndexComponent
>>>>>>> fce7463b9600983e8bb9d4f45adfa4114c5bd941

    //ContentWrapContainerComponent
  ]
})
export class HomeModule {

}

export function HttLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http,'src/assets/languages','.json');
}
