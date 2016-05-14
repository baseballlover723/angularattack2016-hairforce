import { Component, OnInit, Input } from '@angular/core';
import {Workout} from "../models/workout";
import {Assignment} from "../models/assignment";
import {SingleExercise} from "../testdata/single-exercise";
import {AssignmentCardComponent} from "../assignment-card";

@Component({
  moduleId: module.id,
  selector: 'app-session-list',
  templateUrl: 'session-list.component.html',
  styleUrls: ['session-list.component.css'],

  directives: [AssignmentCardComponent],
  providers: [SingleExercise]
})
export class SessionListComponent implements OnInit {

  @Input() workout: Workout;
  
  // Build query to place all assignments here
  assignments: Assignment[];
  

  constructor(private singleAssignmentService: SingleExercise) {
    this.assignments = [];
  }

  ngOnInit() {
    // this.assignments.push(this.singleAssignmentService.getAssignment());
    // this.assignments.push(this.singleAssignmentService.getAssignment());
    // this.assignments.push(this.singleAssignmentService.getAssignment());
    // this.assignments.push(this.singleAssignmentService.getAssignment());
  }
}
