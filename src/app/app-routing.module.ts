import { BooksGridComponent } from './tables/books/books.component';

import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { IndexComponent } from './home/index/index.component';
import { RouterModule, Routes } from '@angular/router';
import { MechanicsComponent } from './physics/mechanics/mechanics.component';
import { ElectromagnetismComponent } from './physics/electromagnetism/electromagnetism.component';
import { ComputationalComponent } from './physics/computational/computational.component';
import { MotivationComponent } from './physics/motivation/motivation.component';

import { VectorgeometryComponent } from './mathematics/vectorgeometry/vectorgeometry.component';
import { CalculusComponent } from './mathematics/calculus/calculus.component';
import { AlgebraComponent } from './mathematics/algebra/algebra.component';
import { JavaComponent } from './programming/java/java.component';
import { InformaticsegurityComponent } from './programming/informaticsegurity/informaticsegurity.component';
import { ProgrammerblogComponent } from './programming/programmerblog/programmerblog.component';
import { MotivationmathComponent } from './mathematics/motivationmath/motivationmath.component';
import { MotivationproComponent } from './programming/motivationpro/motivationpro.component';

import { IndexLoginComponent } from './login/index/index.component';
import { IndexSignupComponent } from './signup/index/index.component';




const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'mechanics', component: MechanicsComponent },
  { path: 'electromagnetism', component: ElectromagnetismComponent },
  { path: 'computational', component: ComputationalComponent },
  { path: 'physics_motivation', component: MotivationComponent },
  { path: 'vectorgeometry', component: VectorgeometryComponent },
  { path: 'calculus', component: CalculusComponent },
  { path: 'algebra', component: AlgebraComponent },
  { path: 'motivationmath', component: MotivationmathComponent },
  { path: 'java', component: JavaComponent },
  { path: 'informaticsegurity', component: InformaticsegurityComponent },
  { path: 'programmerblog', component: ProgrammerblogComponent },
  { path: 'motivationpro', component: MotivationproComponent },
  { path: 'login', component:IndexLoginComponent},
  { path: 'signup', component:IndexSignupComponent},
  { path: 'books', component:BooksGridComponent}

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
