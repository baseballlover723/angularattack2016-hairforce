import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExerciseTileComponent } from '../exercise-tile';
import {ExerciseService} from "../services/exercise/exercise.service";
import {Exercise} from "../models/exercise";
import {Workout} from '../models/workout';
import {WorkoutService} from "../services/workout/workout.service";
import {AssignmentService} from "../services/assignment/assignment.service";
import {Assignment} from "../models/assignment";

@Component({
  moduleId: module.id,
  selector: 'week-plan-card',
  templateUrl: 'week-plan-card.component.html',
  styleUrls: ['week-plan-card.component.css'],

  directives: [ExerciseTileComponent],
  providers: [WorkoutService, ExerciseService, AssignmentService]
})
export class WeekPlanCardComponent implements OnInit {
  public exercises: Exercise[];
  private workout: Workout;

  constructor(private router: Router, private exerciseService: ExerciseService, private workoutService: WorkoutService, private assignmentService: AssignmentService) {
  }

  ngOnInit() {
    this.exercises = [];

    this.workoutService.getWorkout('439jfajoejfw',(workout) => {
      this.workout = workout;
        for(var a in this.workout.assignments){
          this.assignmentService.getAssignment(String(this.workout.assignments[a]), (assignment) => {
            this.exerciseService.getExercise(String(assignment.exercise), (exercise) => {
              this.exercises.push(exercise);
            });
          });
         }

    });
  }

  startSession(){
    this.router.navigate(['/session/' + this.workout['$key']]);
  }

  startExercise(e){
    this.router.navigate(['/exercises/'+e.$key]);
  }

}
