import { Component, OnInit } from '@angular/core';
import {Exercise} from "../models/exercise";

@Component({
  moduleId: module.id,
  selector: 'exercise-tile',
  inputs: ['exercise'],
  templateUrl: 'exercise-tile.component.html',
  styleUrls: ['exercise-tile.component.css']
})

export class ExerciseTileComponent implements OnInit {
  public exercise: Exercise;

  constructor() {
  }

  ngOnInit() {

  }


}
