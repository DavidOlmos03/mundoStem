import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { IndexComponent } from './home/index/index.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: IndexComponent }
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
