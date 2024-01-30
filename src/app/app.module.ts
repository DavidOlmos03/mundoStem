import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PhysicsModule } from './physics/physics.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';

import { MathematicsModule } from './mathematics/mathematics.module';
import { AppRoutingModule } from './app-routing.module';
import { ProgrammingModule } from './programming/programming.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { TranslateService } from '@ngx-translate/core';
import { SignupModule } from './signup/signup.module';
/**
 * Modulos necesarios para crear la página multilenguaje
 */
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    HomeModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    LoginModule,
    SignupModule,
    PhysicsModule,
    MathematicsModule,
    ProgrammingModule,
    BrowserAnimationsModule,
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
