import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { home } from './home/home.component';

const routes: Routes = [
  { 
  path: '', 
  redirectTo: 'home', 
  pathMatch: 'full' 
},
{
  path:'home',
  component:home
},
{
  path:'info/:location',
  component:InfoComponent
},
{
  path:'**',
  redirectTo: 'home',
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
