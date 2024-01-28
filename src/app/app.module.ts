import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PhysicsModule } from './physics/physics.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
<<<<<<< HEAD
import { MathematicsModule } from './mathematics/mathematics.module';
import { AppRoutingModule } from './app-routing.module';
import { ProgrammingModule } from './programming/programming.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



=======
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { TranslateService } from '@ngx-translate/core';
import { SignupModule } from './signup/signup.module';
/**
 * Modulos necesarios para crear la página multilenguaje
 */
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
>>>>>>> fce7463b9600983e8bb9d4f45adfa4114c5bd941

@NgModule({
  declarations: [
    AppComponent,
  

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HomeModule,
    AppRoutingModule,
    LoginModule,
    SignupModule,
    PhysicsModule,
<<<<<<< HEAD
    HomeModule,
    MathematicsModule,
    ProgrammingModule,
    BrowserAnimationsModule
=======
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttLoaderFactory,
        deps:[HttpClient]
      }
    })
>>>>>>> fce7463b9600983e8bb9d4f45adfa4114c5bd941
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http,'./assets/languages/','.json');
}
