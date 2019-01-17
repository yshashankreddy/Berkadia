import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { home } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'airquality-checker';
}
