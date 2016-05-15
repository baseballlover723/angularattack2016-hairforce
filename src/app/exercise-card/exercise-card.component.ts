import { Component, Input, OnInit } from '@angular/core';
import {Exercise} from "../models/exercise";
import {LocalExerciseService} from "../testdata/exerciseLocalService";

@Component({
  moduleId: module.id,
  selector: 'app-exercise-card',
  templateUrl: 'exercise-card.component.html',
  styleUrls: ['exercise-card.component.css'],

  providers: [LocalExerciseService]
})
export class ExerciseCardComponent implements OnInit {
  
  @Input() exercise: Exercise;
  id: string;

  constructor(private localExerciseService: LocalExerciseService) {}

  ngOnInit() {
    // this.exercise = this.localExerciseService.getExercise();
  }

  

}
