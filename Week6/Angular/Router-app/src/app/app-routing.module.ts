import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StateComponent } from './state/state.component';
import { CentralComponent } from './central/central.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from 'src/auth.guard';


const routes: Routes = [
  { path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }, 
  { path: 'home', canActivate:[AuthGuard],component: HomeComponent },
  
  {
    path: 'state',
    canActivate:[AuthGuard],
    component: StateComponent,
    data: { title: 'STATE' }
  },
  
  {
    path: 'central',
    canActivate:[AuthGuard],
    component: CentralComponent,
    data: { title: 'CENTRAL' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'LOGIN' }
  }

 
 // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=RouterModule.forRoot(routes);