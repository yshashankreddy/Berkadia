import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private readonly air:DataService,private route:ActivatedRoute,private router:Router) { }
  locationAirData;
  location;
  ngOnInit() {
    document.body.classList.add('bg-img');
    this.route.paramMap.subscribe(params => {
      this.location=params.get('location');
    });
    this.air.fetchAirData("https://api.openaq.org/v1/latest?location="+this.location).subscribe((res:any)=>{
      console.log(res.results[0]);  
      this.locationAirData=res.results[0];
    });
  }
}
