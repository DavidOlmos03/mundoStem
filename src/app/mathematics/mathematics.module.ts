import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculusComponent } from './calculus/calculus.component';
import { VectorgeometryComponent } from './vectorgeometry/vectorgeometry.component';
import { AlgebraComponent } from './algebra/algebra.component';
import { MotivationmathComponent } from './motivationmath/motivationmath.component';
import { HomeModule } from '../home/home.module';

import { SharedModule } from '../shared/shared.module';
import { ContentalgebraComponent } from './algebra/contentalgebra/contentalgebra.component';
import { HeaderalgebraComponent } from './algebra/headeralgebra/headeralgebra.component';
import { HeadercalComponent } from './calculus/headercal/headercal.component';
import { ContentcalComponent } from './calculus/contentcal/contentcal.component';
import { HeadervecComponent } from './vectorgeometry/headervec/headervec.component';
import { ContentvecComponent } from './vectorgeometry/contentvec/contentvec.component';
import { HeadermoComponent } from './motivationmath/headermo/headermo.component';
import { ContentmoComponent } from './motivationmath/contentmo/contentmo.component';




@NgModule({
  declarations: [
    CalculusComponent,
    VectorgeometryComponent,
    AlgebraComponent,
    MotivationmathComponent,
    ContentalgebraComponent,
    HeaderalgebraComponent,
    HeadercalComponent,
    ContentcalComponent,
    HeadervecComponent,
    ContentvecComponent,
    HeadermoComponent,
    ContentmoComponent
  
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MathematicsModule { }
