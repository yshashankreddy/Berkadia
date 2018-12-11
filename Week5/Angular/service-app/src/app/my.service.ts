import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  
  constructor() { }

  returnData():any{
    return [{
      'ID':12,
      'NAME':'Shashank'
    },{
      'ID':16,
      'NAME':'Harsha'
    },
    {
      'ID':22,
      'NAME':'Kalyan'
    },
    {
      'ID':28,
      'NAME':'Nithin'
    },
    {
      'ID':32,
      'NAME':'Anand'
    }
  ]
  }
}
