import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MechanicsComponent } from './mechanics/mechanics.component';
import { ElectromagnetismComponent } from './electromagnetism/electromagnetism.component';
import { ComputationalComponent } from './computational/computational.component';
import { MotivationComponent } from './motivation/motivation.component';



@NgModule({
  declarations: [
    MechanicsComponent,
    ElectromagnetismComponent,
    ComputationalComponent,
    MotivationComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[

  ]
})
export class PhysicsModule { }
