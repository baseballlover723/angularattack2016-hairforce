import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExerciseTileComponent } from '../exercise-tile';

@Component({
  moduleId: module.id,
  selector: 'week-plan-card',
  templateUrl: 'week-plan-card.component.html',
  styleUrls: ['week-plan-card.component.css'],

  directives: [ExerciseTileComponent]
})
export class WeekPlanCardComponent implements OnInit {
  public exercises: Exercise[];

  constructor(private router: Router) {
    this.exercises = "Square up";
  }

  ngOnInit() {
  }

  startExercise(){
    this.router.navigate(['/session']);
  }

}
