import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LateralContainerComponent } from './lateral-container/lateral-container.component';
import { BodyContainerComponent } from './body-container/body-container.component';
import { ContentWrapContainerComponent } from './content-wrap-container/content-wrap-container.component';
import { FooterContainerComponent } from './footer-container/footer-container.component';
import { HeaderContainerComponent } from './header-container/header-container.component';
import { LoginContainerComponent } from './login-container/login-container.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LateralContainerComponent,
    BodyContainerComponent,
    ContentWrapContainerComponent,
    FooterContainerComponent,
    HeaderContainerComponent,
    LoginContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
