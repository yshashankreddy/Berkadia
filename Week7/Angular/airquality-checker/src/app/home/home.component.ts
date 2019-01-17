import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class home implements OnInit {

  constructor(private readonly air:DataService) { }
  airData;
  ngOnInit() {
    document.body.classList.add('bg-img');  
    this.air.fetchAirData("https://api.openaq.org/v1/latest?country=IN").subscribe((res:any)=>{
      //console.log(res);
      this.airData=res.results;
    });
  }

}