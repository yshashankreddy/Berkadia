import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StateComponent } from './state/state.component';
import { CentralComponent } from './central/central.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from 'src/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StateComponent,
    CentralComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
