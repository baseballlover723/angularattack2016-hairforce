import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityComponent } from '../activity';
import {ExerciseService} from "../services/exercise/exercise.service";
import {Exercise} from "../models/exercise";

@Component({
  moduleId: module.id,
  selector: 'activity-history',
  templateUrl: 'activity-history.component.html',
  styleUrls: ['activity-history.component.css'],

  directives: [ActivityComponent]

})
export class ActivityHistoryComponent implements OnInit {
  public exercises: Exercise[];
  constructor(private router: Router, private exerciseService: ExerciseService) {}

  ngOnInit() {
    this.exerciseService.getAllExercises((exercises) => {
      this.exercises = exercises;
    });
  }

  startExercise(e){
    this.router.navigate(['/exercises/'+e.$key]);
  }

}
