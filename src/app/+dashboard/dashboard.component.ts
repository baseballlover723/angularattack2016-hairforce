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
import {ProfileService} from "../services/profile/profile.service";
import {Router} from '@angular/router';


@Component({
  moduleId: module.id,
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html",
  styleUrls: ["dashboard.component.css"],

  providers: [ExerciseService, AssignmentService, WorkoutService,ProfileService],
  directives: [
    WeekPlanCardComponent,
    ActivityHistoryComponent,
    UserInfoFormComponent,
    MaterializeDirective]

})
export class DashboardComponent implements OnInit {


  constructor(private router: Router, private profileService: ProfileService) {
    if (profileService.getCurrentUser()) {
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/']);
    }
  }


  ngOnInit() {

  }

}
