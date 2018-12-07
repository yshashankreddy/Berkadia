import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countitems',
  templateUrl: './countitems.component.html',
  styleUrls: ['./countitems.component.css']
})
export class CountitemsComponent implements OnInit {
  result=0;
  vegetables:string[]=["Tomato",
  "Onions",
  "Cucumber",
  "Carrot",
  "Cabbage",
  "Beetroot",
 "Capsicum",
  "Mint",
  "Curry Leaves"]

  displayCounter(count) {
    console.log(count);
    this.result=count;
}
  constructor() { }

  ngOnInit() {
  }

}
