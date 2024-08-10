import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { PhysicsComponent } from './physics.component';
import { MechanicsComponent } from './mechanics/mechanics.component';
import { ElectromagnetismComponent } from './electromagnetism/electromagnetism.component';
import { ComputationalComponent } from './computational/computational.component';
import { MotivationComponent } from './motivation/motivation.component';


const routes: Routes = [
  {
    path:'',
    component: PhysicsComponent,
    children:[
      {
        path:'mechanics',
        data:{
          name:'mechanics',
          imageSrc:'assets/imgs/headerImage_2.jpg'
        },
        component: MechanicsComponent
      },
      {
        path:'electromagnetism',
        data:{
          name:'electromagnetism',
          imageSrc:'assets/imgs/physics/electromagnetism/electromagnetism.jpg'
        },
        component: ElectromagnetismComponent
      },
      {
        path:'computational',
        data:{
          name:'computational physics',
          imageSrc:'assets/imgs/physics/computational/software.jpg'
        },
        component: ComputationalComponent
      },
      {
        path:'motivation',
        data:{
          name:'motivation',
          imageSrc:'assets/imgs/physics/motivation/cosmosImage3.jpg'
        },
        component: MotivationComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhysicsRoutingModule { }
