import { Injectable } from '@angular/core';

@Injectable()
export class MyserviceService {

  constructor() { }
  public checkusernameandpassword(uname: string, pwd : string)
  {
if(uname == "shashank" && pwd =="root"){
localStorage.setItem('username',"admin");
return true;
}
else{
  return false;
}
  }

}