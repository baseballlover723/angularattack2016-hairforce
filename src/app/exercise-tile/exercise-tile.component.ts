import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'exercise-tile',
  inputs: ['name'],
  templateUrl: 'exercise-tile.component.html',
  styleUrls: ['exercise-tile.component.css']
})

export class ExerciseTileComponent implements OnInit {
  public name: String;
  constructor() {
    this.name = "Boxing";
  }

  ngOnInit() {
  }


}
