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

@NgModule({
  declarations: [
    MechanicsComponent,
    ElectromagnetismComponent,
    ComputationalComponent,
    MotivationComponent,
    HeaderMechanicsComponent,
    HeaderElectromagnetismComponent,
    HeaderComputationalComponent,
    HeaderMotivationComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[

  ]
})
export class PhysicsModule { }
