import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExerciseTileComponent } from '../exercise-tile';
import {ExerciseService} from "../services/exercise/exercise.service";
import {Exercise} from "../models/exercise";

@Component({
  moduleId: module.id,
  selector: 'week-plan-card',
  templateUrl: 'week-plan-card.component.html',
  styleUrls: ['week-plan-card.component.css'],

  directives: [ExerciseTileComponent]
})
export class WeekPlanCardComponent implements OnInit {
  public exercises: Exercise[];

  constructor(private router: Router, private exerciseService: ExerciseService) {

  }

  ngOnInit() {
    this.exerciseService.getAllExercises((exercises) => {
      this.exercises = exercises;
    });
  }

  startSession(){
    this.router.navigate(['/session/']);
  }

  startExercise(e){
    this.router.navigate(['/exercises/'+e.$key]);
  }

}
