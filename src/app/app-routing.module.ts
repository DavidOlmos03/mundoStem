
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { IndexComponent } from './home/index/index.component';
import { RouterModule, Routes } from '@angular/router';
import { MechanicsComponent } from './physics/mechanics/mechanics.component';
import { ElectromagnetismComponent } from './physics/electromagnetism/electromagnetism.component';
import { ComputationalComponent } from './physics/computational/computational.component';
import { MotivationComponent } from './physics/motivation/motivation.component';
import { IndexLoginComponent } from './login/index/index.component';
import { IndexSignupComponent } from './signup/index/index.component';
const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'mechanics', component: MechanicsComponent },
  { path: 'electromagnetism', component: ElectromagnetismComponent },
  { path: 'computational', component: ComputationalComponent },
  { path: 'physics_motivation', component: MotivationComponent },
  { path: 'login', component:IndexLoginComponent},
  { path: 'signup', component:IndexSignupComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule,
  HomeModule],
})
export class AppRoutingModule { }
