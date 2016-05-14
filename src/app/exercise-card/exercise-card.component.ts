import {Component, OnInit} from '@angular/core';
import {SingleExercise} from "../testdata/single-exercise";
import {Assignment} from "../models/assignment";

@Component({
  moduleId: module.id,
  selector: 'app-exercise-card',
  templateUrl: 'exercise-card.component.html',
  styleUrls: ['exercise-card.component.css'],
  providers: [SingleExercise]
})
export class ExerciseCardComponent implements OnInit {

  assignment:Assignment;

  constructor(private singleAssignmentService:SingleExercise) {
  }

  ngOnInit() {
    this.assignment = this.singleAssignmentService.getAssignment();
  }

}
