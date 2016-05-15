import { Component, OnInit, Input } from '@angular/core';
import {Workout} from "../models/workout";
import {Assignment} from "../models/assignment";
import {AssignmentCardComponent} from "../assignment-card";
import {RouteSegment} from '@angular/router';
import {WorkoutService} from "../services/workout/workout.service";

@Component({
  moduleId: module.id,
  selector: 'app-session-list',
  templateUrl: 'session-list.component.html',
  styleUrls: ['session-list.component.css'],

  directives: [AssignmentCardComponent],
  providers: [WorkoutService]
})
export class SessionListComponent implements OnInit {
  private id: String;

  @Input() workout: Workout;

  // Build query to place all assignments here
  assignments: Assignment[];


  constructor(private ws: WorkoutService) {
    this.assignments = [];
  }

  ngOnInit() {
    // this.assignments.push(this.singleAssignmentService.getAssignment());
    // this.assignments.push(this.singleAssignmentService.getAssignment());
    // this.assignments.push(this.singleAssignmentService.getAssignment());
    // this.assignments.push(this.singleAssignmentService.getAssignment());
  }

  routerOnActivate(curr:RouteSegment) {
      this.id = curr.getParam('id');
      this.ws.getWorkout('439jfajoejfw',(workout) => {
        this.workout = workout;
      });

  }
}
