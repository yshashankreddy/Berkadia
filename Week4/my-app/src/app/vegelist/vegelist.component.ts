import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-vegelist',
  templateUrl: './vegelist.component.html',
  styleUrls: ['./vegelist.component.css']
})
export class VegelistComponent implements OnInit {
  @Input() vegetables:string[];
      @Output() valueChange = new EventEmitter<number>();
      count=0;
  constructor() { }

  ngOnInit() {
  }
  counter(){
    this.count++;
    this.valueChange.emit(this.count);
 }

}
