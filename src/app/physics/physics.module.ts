import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MechanicsComponent } from './mechanics/mechanics.component';
import { ElectromagnetismComponent } from './electromagnetism/electromagnetism.component';
import { HeaderElectromagnetismComponent } from './electromagnetism/header/header.component';
import { ComputationalComponent } from './computational/computational.component';
import { MotivationComponent } from './motivation/motivation.component';
import { HeaderMechanicsComponent } from './mechanics/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComputationalComponent } from './computational/header/header.component';
import { HeaderMotivationComponent } from './motivation/header/header.component';
import { ContentMechanicsComponent } from './mechanics/content/content.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ContentElectromagnetismComponent } from './electromagnetism/content/content.component';
/**
 * Modulos necesarios para crear la página multilenguaje
 */
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MechanicsComponent,
    ElectromagnetismComponent,
    ComputationalComponent,
    MotivationComponent,
    HeaderMechanicsComponent,
    HeaderElectromagnetismComponent,
    HeaderComputationalComponent,
    HeaderMotivationComponent,
    ContentMechanicsComponent,
    ContentElectromagnetismComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    YouTubePlayerModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttLoaderFactory,
        deps:[HttpClient]
      }
    })
  ],
  exports:[

  ]
})
export class PhysicsModule { }

export function HttLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http,'src/assets/languages','.json');
}
