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
  private imgurl: string;

  constructor() {
  }

  ngOnInit() {
  // console.log(this.exercise);
  //   this.imgurl = "http://img.youtube.com/vi/" +
  //    this.exercise.videoUrl.split("embed/")[1].split("?")[0] +
  //    "0.jpg"

  //    //https://www.youtube.com/embed/K2e4lNrUXYo?loop=1?modestbranding=1
  }


}
