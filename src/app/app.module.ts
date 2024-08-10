// Angular
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// Routing
import { AppRoutingModule } from './app-routing.module';


// Modules

// import { PhysicsModule } from './physics/physics.module';
import { HomeModule } from './modules/home/home.module';
import { PhysicsModule } from './modules/physics/physics.module';
import { SharedModule } from './shared/shared.module';
import { MathematicsModule } from './mathematics/mathematics.module';
import { ProgrammingModule } from './programming/programming.module';



import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AuthModule } from './modules/auth/auth.module';
// import { LoginModule } from './login/login.module';
// import { SignupModule } from './signup/signup.module';


/**
 * Modulos necesarios para crear la página multilenguaje
 */
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';


/**
 * Para ag gred
 */
import { AgGridModule } from 'ag-grid-angular';
import { TablesModule } from './tables/tables.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ReactiveFormsModule,
    SharedModule,
    BrowserModule,
    HomeModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    // LoginModule,
    // AuthModule,
    // SignupModule,
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
    }),
    AgGridModule,
    TablesModule

  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http,'./assets/languages/','.json');
}
