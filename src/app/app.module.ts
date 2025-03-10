import { NG_EVENT_PLUGINS } from "@taiga-ui/event-plugins";
import { TuiRoot } from "@taiga-ui/core";
// Angular
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Modules
import { HomeModule } from './modules/home/home.module';
import { PhysicsModule } from './modules/physics/physics.module';
import { SharedModule } from './shared/shared.module';
import { MathematicsModule } from './modules/mathematics/mathematics.module';
import { ProgrammingModule } from './modules/programming/programming.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    TablesModule,
    TuiRoot
],
  providers: [TranslateService, NG_EVENT_PLUGINS],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http,'./assets/languages/','.json');
}
