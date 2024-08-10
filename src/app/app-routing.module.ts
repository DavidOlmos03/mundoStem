import { NgModule, Component } from '@angular/core';
import { BooksGridComponent } from './tables/books/books.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { homeComponent } from './modules/home/home.component';

const routes: Routes = [
  {
    path:'',
    data:{
      name:'mundoStem',
      imageSrc:'assets/images/register-banner.jpg'
    },
    component:homeComponent
    // loadChildren: () => import('./modules/home/home.module').then(m=>m.HomeModule)
  },
  {
    path: 'books',
    component:BooksGridComponent
  },
  {
    path:'auth',
    loadChildren: ()=> import('./modules/auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'physics',
    loadChildren: ()=> import('./modules/physics/physics.module').then(m=>m.PhysicsModule)
  },
  {
    path:'mathematics',
    loadChildren: ()=> import('./modules/mathematics/mathematics.module').then(m=>m.MathematicsModule)
  },
  {
    path:'programming',
    loadChildren: ()=> import('./modules/programming/programming.module').then(m=>m.ProgrammingModule)
  },
  // { path: 'signup', component:IndexSignupComponent},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
