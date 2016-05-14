import { Component, Input, OnInit } from '@angular/core';
import {Exercise} from "../models/exercise";
import {ExerciseTileComponent} from "../exercise-tile/exercise-tile.component";

@Component({
  moduleId: module.id,
  selector: 'app-similar-exercises',
  templateUrl: 'similar-exercises.component.html',
  styleUrls: ['similar-exercises.component.css'],
  
  directives: [ExerciseTileComponent]
})
export class SimilarExercisesComponent implements OnInit {
  
  @Input() exercises: Exercise[];

  constructor() {}

  ngOnInit() {
  }

}
