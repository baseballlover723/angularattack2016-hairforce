import {Component, OnInit} from "@angular/core";
import {WeekPlanCardComponent} from "../week-plan-card";
import {ActivityHistoryComponent} from "../activity-history";
import {ExerciseService} from "../services/exercise/exercise.service";
import {Exercise} from "../models/exercise";
import {AssignmentService} from "../services/assignment/assignment.service";
import {Assignment} from "../models/assignment";
import {Workout} from "../models/workout";
import {WorkoutService} from "../services/workout/workout.service";
import {UserInfoFormComponent} from "../user-info-form/user-info-form.component";
import {MaterializeDirective} from "angular2-materialize";


@Component({
  moduleId: module.id,
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html",
  styleUrls: ["dashboard.component.css"],

  providers: [ExerciseService, AssignmentService, WorkoutService],
  directives: [
    WeekPlanCardComponent,
    ActivityHistoryComponent,
    UserInfoFormComponent,
    MaterializeDirective]
})
export class DashboardComponent implements OnInit {


  constructor() {

  }


  ngOnInit() {

  }

}
