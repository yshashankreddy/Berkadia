import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user =[
    {id:1,Name:"Shashank",Marks:88},
    {id:2,Name:"Harsha",Marks:95},
    {id:3,Name:"Anand",Marks:92},
    {id:4,Name:"Nithin",Marks:85},
    {id:5,Name:"Sandeep",Marks:90},
    {id:6,Name:"Bharath",Marks:80}
];

  title = 'STUDENT-DETAILS';
}
