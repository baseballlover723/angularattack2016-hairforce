import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExerciseTileComponent } from '../exercise-tile';

@Component({
  moduleId: module.id,
  selector: 'week-plan-card',
  templateUrl: 'week-plan-card.component.html',
  styleUrls: ['week-plan-card.component.css']

  directives: [ExerciseTileComponent]
})
export class WeekPlanCardComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  startExercise(){
    this.router.navigate(['/session']);
  }

}
