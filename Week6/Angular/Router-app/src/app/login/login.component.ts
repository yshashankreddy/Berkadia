import { Component, OnInit } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import { MyserviceService } from 'src/Myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[MyserviceService]
})
export class LoginComponent implements OnInit {
  constructor(private service : MyserviceService , private routes: Router) { }
  msg;
  ngOnInit() {
  }
  check(uname: string, p : string)
  {
    var output = this.service.checkusernameandpassword(uname, p);
    if(output == true)
    {
      this.routes.navigate(['/home']);
    }
    else{
this.msg ='Invalid username or password';
    }
  }
  }
