import { Component, OnInit, Input } from '@angular/core';
import {Workout} from "../models/workout";
import {Assignment} from "../models/assignment";

@Component({
  moduleId: module.id,
  selector: 'app-session-list',
  templateUrl: 'session-list.component.html',
  styleUrls: ['session-list.component.css']
})
export class SessionListComponent implements OnInit {

  @Input() workout: Workout;
  
  // Build query to place all assignments here
  assignments: Assignment[];
  

  constructor() { }

  ngOnInit() { }

}
