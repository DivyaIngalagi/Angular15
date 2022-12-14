import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';//we have to install this
@Injectable({
  providedIn: 'root'
})
export class BackendService implements InMemoryDbService {

  constructor() { }

  createDb(){
    let contacts=[

      {id:1,name:'divya',email:'c@121gmail.com'},
      {id:2,name:'anand',email:'c@122gmail.com'},
      {id:3,name:'sunita',email:'c@123gmail.com'},
      {id:4,name:'jack',email:'c@124gmail.com'}

    ];
    return {contacts};
  }
}
