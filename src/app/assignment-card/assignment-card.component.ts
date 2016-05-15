import { Component, Input, OnInit } from '@angular/core';
import {Assignment} from "../models/assignment";

@Component({
  moduleId: module.id,
  selector: 'app-assignment-card',
  templateUrl: 'assignment-card.component.html',
  styleUrls: ['assignment-card.component.css']
})
export class AssignmentCardComponent implements OnInit {

  @Input() assignment: Assignment;
  
  constructor() {
  }

  ngOnInit() {
  }

  completeSet() {
    this.assignment.completed = true;
  }

  favoriteExercise() {
    // To be implemented
    console.log("Favorited");
  }

}
