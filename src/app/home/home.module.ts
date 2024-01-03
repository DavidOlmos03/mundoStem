import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { LateralComponent } from './lateral/lateral.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
//import { ContentWrapContainerComponent } from './content-wrap-container/content-wrap-container.component';

@NgModule({
  declarations: [
    FooterComponent,
    IndexComponent,
    HeaderComponent,
    LateralComponent,
    ContentComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent
     //ContentWrapContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FooterComponent,
    IndexComponent

    //ContentWrapContainerComponent
  ]
})
export class HomeModule {

}
