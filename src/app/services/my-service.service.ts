import { Injectable } from '@angular/core';

@Injectable()
export class MyServiceService {

  myInt: number;

  constructor() {
    this.myInt = -1;
  }

  myFunc() {
    this.myInt++;
    return "this is my function: " + this.myInt;
  }

}
