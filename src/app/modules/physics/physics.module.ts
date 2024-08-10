// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { MechanicsComponent } from './mechanics/mechanics.component';
// import { HeaderMechanicsComponent } from './mechanics/header/header.component';
import { ContentMechanicsComponent } from './mechanics/content/content.component'
import { ElectromagnetismComponent } from './electromagnetism/electromagnetism.component';
import { HeaderElectromagnetismComponent } from './electromagnetism/header/header.component';
import { ContentElectromagnetismComponent } from './electromagnetism/content/content.component';
import { ComputationalComponent } from './computational/computational.component';
import { HeaderComputationalComponent } from './computational/header/header.component';
import { ContentComputationalComponent } from './computational/content/content.component';
import { MotivationComponent } from './motivation/motivation.component';
import { HeaderMotivationComponent } from './motivation/header/header.component';
import { ContentMotivationComponent } from './motivation/content/content.component';
import { PhysicsComponent } from './physics.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

// Modules
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { PhysicsRoutingModule } from './physics-routing.module';

/**
 * Modulos necesarios para crear la página multilenguaje
 */
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MechanicsComponent,
    // HeaderMechanicsComponent,
    ContentMechanicsComponent,
    ElectromagnetismComponent,
    ComputationalComponent,
    MotivationComponent,
    // HeaderMechanicsComponent,
    HeaderElectromagnetismComponent,
    HeaderComputationalComponent,
    HeaderMotivationComponent,
    ContentMechanicsComponent,
    ContentElectromagnetismComponent,
    ContentComputationalComponent,
    ContentMotivationComponent,
    PhysicsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    PhysicsRoutingModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttLoaderFactory,
        deps:[HttpClient]
      }
    })
  ]
})
export class PhysicsModule { }

export function HttLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http,'./assets/languages/','.json');
}
