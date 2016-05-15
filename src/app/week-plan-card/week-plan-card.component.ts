import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExerciseTileComponent } from '../exercise-tile';
import {ExerciseService} from "../services/exercise/exercise.service";
import {Exercise} from "../models/exercise";
import {Workout} from '../models/workout';
import {WorkoutService} from "../services/workout/workout.service";
import {AssignmentService} from "../services/assignment/assignment.service";
import {Assignment} from "../models/assignment";
import {MaterializeDirective} from 'angular2-materialize';

@Component({
  moduleId: module.id,
  selector: 'week-plan-card',
  templateUrl: 'week-plan-card.component.html',
  styleUrls: ['week-plan-card.component.css'],
  inputs: ['workout'],
  directives: [ExerciseTileComponent],
  providers: [WorkoutService, ExerciseService, AssignmentService, MaterializeDirective]
})
export class WeekPlanCardComponent implements OnInit {
  public exercises: Exercise[];
  private workout: Workout;
  private assignments: Assignment[];

  constructor(private router: Router, private exerciseService: ExerciseService, private workoutService: WorkoutService, private assignmentService: AssignmentService) {

  }

  ngOnInit() {
    this.exercises = [];
    console.log(this.workout);

    // for(var a in this.workout.assignments){
    // this.assignmentService.getAssignments(this.workout.assignments, (assignments) => {
      // this.workouts.assignments = assignments;
      for (let assignment of this.workout.assignments) {
        console.log(assignment, assignment.exercise);
        this.exerciseService.getExercise(assignment.exercise["$key"], (exercise) => {
          this.exercises.push(exercise);
        });
      }
    // });

  }

  startSession(){
    this.router.navigate(['/session/' + this.workout['$key']]);
  }

  startExercise(e){
    this.router.navigate(['/exercises/'+e.$key]);
  }

}
