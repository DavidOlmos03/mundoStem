import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { PhysicsModule } from './physics/physics.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { MathematicsModule } from './mathematics/mathematics.module';
import { AppRoutingModule } from './app-routing.module';
import { ProgrammingModule } from './programming/programming.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
  

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    PhysicsModule,
    HomeModule,
    MathematicsModule,
    ProgrammingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
