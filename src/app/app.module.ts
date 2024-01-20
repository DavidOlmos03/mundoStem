import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PhysicsModule } from './physics/physics.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';

import { TranslateService } from '@ngx-translate/core';
/**
 * Modulos necesarios para crear la página multilenguaje
 */
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HomeModule,
    AppRoutingModule,
    PhysicsModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttLoaderFactory,
        deps:[HttpClient]
      }
    })
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http,'./assets/languages/','.json');
}
