import { Component, OnInit } from '@angular/core';
import {Assignment} from "../models/assignment";
import {Exercise} from "../models/exercise";

@Component({
  moduleId: module.id,
  selector: 'app-statistics',
  templateUrl: 'statistics.component.html',
  styleUrls: ['statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  private assignments: Assignment[];

  constructor() {}

  ngOnInit() {
    let assignment = new Assignment(new Exercise('Power lifts'), null);
    assignment.completed = true;
    assignment.weight = 20;
    assignment.repetitions = 8;
    assignment.sets = 3;
    assignment.exercise.type = 'strength';

    let cassignment = new Assignment(new Exercise('Hammer curls'), null);
    cassignment.completed = true;
    cassignment.weight = 30;
    cassignment.repetitions = 10;
    cassignment.sets = 3;
    cassignment.exercise.type = 'strength';


    let lassignment = new Assignment(new Exercise('Running'), null);
    lassignment.completed = true;
    lassignment.time = 90;
    lassignment.exercise.type = 'cardio';

    this.assignments = [assignment, assignment, cassignment, lassignment];
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
}
