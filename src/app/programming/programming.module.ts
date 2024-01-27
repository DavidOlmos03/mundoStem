import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavaComponent } from './java/java.component';
import { SharedModule } from '../shared/shared.module';
import { InformaticsegurityComponent } from './informaticsegurity/informaticsegurity.component';
import { ProgrammerblogComponent } from './programmerblog/programmerblog.component';
import { MotivationproComponent } from './motivationpro/motivationpro.component';
import { ContentinfComponent } from './informaticsegurity/contentinf/contentinf.component';
import { HeaderinfComponent } from './informaticsegurity/headerinf/headerinf.component';
import { ContentblogComponent } from './programmerblog/contentblog/contentblog.component';
import { HeaderjavaComponent } from './java/headerjava/headerjava.component';
import { ContentjavaComponent } from './java/contentjava/contentjava.component';
import { HeaderproComponent } from './motivationpro/headerpro/headerpro.component';
import { ContentproComponent } from './motivationpro/contentpro/contentpro.component';
import { HeaderblogComponent } from './programmerblog/headerblog/headerblog.component';



@NgModule({
  declarations: [
    
    JavaComponent,
    InformaticsegurityComponent,
    ProgrammerblogComponent,
    MotivationproComponent,
    ContentinfComponent,
    HeaderinfComponent,
    ContentblogComponent,
    HeaderblogComponent,
    HeaderjavaComponent,
    ContentjavaComponent,
    HeaderproComponent,
    ContentproComponent
  
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProgrammingModule { }
