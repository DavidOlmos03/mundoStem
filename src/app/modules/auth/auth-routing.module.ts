import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
  {
    path:'',
    component: AuthComponent,
    children:[
      {
        path:'login',
        data:{
          name:'Login',
          imageSrc:'assets/images/register-banner.jpg'
        },
        component:LoginComponent
      },
      {
        path:'registro',
        component:RegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
