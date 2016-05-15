import { Component, Input, OnInit } from '@angular/core';
import {Exercise} from "../models/exercise";

@Component({
  moduleId: module.id,
  selector: 'app-exercise-card',
  templateUrl: 'exercise-card.component.html',
  styleUrls: ['exercise-card.component.css'],

})
export class ExerciseCardComponent implements OnInit {

  @Input() exercise: Exercise;
  id: string;

  constructor() {}

  ngOnInit() {
    // this.exercise = this.localExerciseService.getExercise();
  }



}
