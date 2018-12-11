import { Component } from '@angular/core';
import {MyService} from './my.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MyService]
})
export class AppComponent {
  constructor(private readonly service:MyService){}
  title = 'service-app';
  data:any=[];
  show(){
    this.data=this.service.returnData();
  }
}
