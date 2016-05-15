import {Component, OnInit} from "@angular/core";
import {WeekPlanCardComponent} from "../week-plan-card";
import {ExerciseService} from "../services/exercise/exercise.service";
import {Exercise} from "../models/exercise";
import {AssignmentService} from "../services/assignment/assignment.service";
import {Assignment} from "../models/assignment";


@Component({
  moduleId: module.id,
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html",
  styleUrls: ["dashboard.component.css"],

  directives: [WeekPlanCardComponent],
  providers: [ExerciseService, AssignmentService]
})
export class DashboardComponent implements OnInit {
  exercise: Exercise;
  exercises: Exercise[];

  assignment: Assignment;
  assignments: Assignment[];

  constructor(private exerciseService: ExerciseService, private assignmentService: AssignmentService) {
  }

  ngOnInit() {
  }

  testExercise() {
    this.exerciseService.getExercise("cvdeaghgfdjhfgmnm", (exercise) => {
      this.exercise = exercise;
    });
  }

  testExercises() {
    this.exerciseService.getExercises(["cvdeaghgfdjhfgmnm", "gbfhnghfvbnbgfcv"], (exercises) => {
      this.exercises = exercises;
    });
  }

  testAllExercises() {
    this.exerciseService.getAllExercises((exercises) => {
      this.exercises = exercises;
    });
  }

  testAssignment() {
    this.assignmentService.getAssignment("asdfasljflawjfelaj", (assignment) => {
      this.assignment = assignment;
    });
  }

  testAssignments() {
    this.assignmentService.getAssignments(["asoaesjfoacnlk", "basjlkfdsdflasmewefsdf"], (assignments) => {
      this.assignments = assignments;
    });
  }

  testAllAssignments() {
    this.assignmentService.getAllAssignments((assignments) => {
      this.assignments = assignments;
    });
  }


}
