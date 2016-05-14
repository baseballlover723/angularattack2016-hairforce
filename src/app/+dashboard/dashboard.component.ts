import {Component, OnInit} from "@angular/core";
import {WeekPlanCardComponent} from "../week-plan-card";
import {ExerciseService} from "../services/exercise/exercise.service";
import {Exercise} from "../models/exercise";


@Component({
  moduleId: module.id,
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html",
  styleUrls: ["dashboard.component.css"],

  directives: [WeekPlanCardComponent],
  providers: [ExerciseService]
})
export class DashboardComponent implements OnInit {
  exercise: Exercise;
  exercises: Exercise[];

  constructor(private exerciseService: ExerciseService) {
  }

  ngOnInit() {
  }

  testExercise() {
    this.exerciseService.getExercise("cvdeaghgfdjhfgmnm").subscribe((exercise) => {
      this.exercise = exercise;
    });
  }

  testExercises() {
    this.exerciseService.getExercises(["cvdeaghgfdjhfgmnm", "gbfhnghfvbnbgfcv"], (exercises) => {
      this.exercises = exercises;
    });
  }

  testAllExercises() {
    this.exerciseService.getAllExercises().subscribe((exercises) => {
      this.exercises = exercises;
    });
  }


}
