import { Component, OnInit } from '@angular/core';
import {Exercise} from "../models/exercise";

@Component({
  moduleId: module.id,
  selector: 'activity',
  templateUrl: 'activity.component.html',
  inputs: ['exercise'],
  styleUrls: ['activity.component.css']
})
export class ActivityComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
