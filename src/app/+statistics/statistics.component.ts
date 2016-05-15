import { Component, OnInit } from '@angular/core';
import {Assignment} from "../models/assignment";
import {Exercise} from "../models/exercise";
import {Workout} from "../models/workout";
import {WorkoutService} from "../services/workout/workout.service";
import {RouteSegment, Router} from '@angular/router';
import {AssignmentService} from "../services/assignment/assignment.service";
import {ExerciseService} from "../services/exercise/exercise.service";

@Component({
  moduleId: module.id,
  selector: 'app-statistics',
  templateUrl: 'statistics.component.html',
  styleUrls: ['statistics.component.css'],
  
  providers: [WorkoutService, AssignmentService, ExerciseService]
})
export class StatisticsComponent implements OnInit {
  
  private id: string;

  private assignments: Assignment[];
  private workout: Workout;
  
  constructor(private workoutService: WorkoutService, private assignmentService: AssignmentService, private router: Router, private exerciseService: ExerciseService) {}

  ngOnInit() {
  }

  routerOnActivate(curr:RouteSegment) {
    this.id = curr.getParam('id');
    this.workoutService.getWorkout(this.id,(workout) => {
      this.workout = workout;
      let strings = workout.assignments;
      console.log("strings", strings);
      this.assignmentService.getAssignmentsWithObjects(strings, (assignments) => {
        this.assignments = assignments;
        console.log("Gotta", this.assignments);
      });
    });

  }

  calculateComplete() {
    let completedCounter = 0;

    if (this.assignments) {
      for (let i = 0; i < this.assignments.length; i++) {
        if (this.assignments[i].completed) {
          completedCounter++;
        }
      }
    }

    let val = Math.round((100 * (completedCounter / this.assignments.length)));
    return val;
  }

  calculatePoundsLifted() {
  let totalWeight = 0;

    for (let i = 0; i < this.assignments.length; i++) {
      if(this.assignments[i].completed && this.assignments[i].exercise.type == 'strength') {
        totalWeight += (this.assignments[i].weight * this.assignments[i].sets * this.assignments[i].repetitions);
      }
    }
    console.log("Pounds lifted", totalWeight);

  return totalWeight;
}

  calculateTimeDoingCardio() {
    let totalTime = 0;

    for (let i = 0; i < this.assignments.length; i++) {
      if(this.assignments[i].completed && this.assignments[i].exercise.type == 'cardio') {
        totalTime += (this.assignments[i].time);
      }
    }

    return totalTime;
  }

  updateFeedback(assignment: Assignment, val: number) {
    return assignment.feedback = val;
  }

  sendFeedback() {

    for (let j = 0; j < this.assignments.length; j++) {
      this.assignmentService.updateAssignment(this.assignments[j]);
    }
    this.router.navigate(['/dashboard']);
  }

  
}
