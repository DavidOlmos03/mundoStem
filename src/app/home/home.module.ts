import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { LateralComponent } from './lateral/lateral.component';
import { ContentComponent } from './content/content.component';
import { SharedModule } from '../shared/shared.module';


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
 


  
  ]
})
export class HomeModule {

}

export function HttLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http,'src/assets/languages','.json');
}
