import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VegelistComponent } from './vegelist/vegelist.component';
import { CountitemsComponent } from './countitems/countitems.component';

@NgModule({
  declarations: [
    AppComponent,
    VegelistComponent,
    CountitemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
