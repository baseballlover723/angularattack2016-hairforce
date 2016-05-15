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
import {DailyPlanGeneratorService} from "../services/dailyPlanGenerator/daily-plan-generator.service";


@Component({
  moduleId: module.id,
  selector: "dashboard",
  templateUrl: "dashboard.component.html",
  styleUrls: ["dashboard.component.css"],

  providers: [ExerciseService, AssignmentService, WorkoutService, ProfileService, DailyPlanGeneratorService],
  directives: [
    WeekPlanCardComponent,
    ActivityHistoryComponent,
    UserInfoFormComponent,
    MaterializeDirective]

})
export class DashboardComponent implements OnInit {
  public workouts: Workout[];
  public workoutKey: string;


  constructor(private router: Router, private assignmentService: AssignmentService, private profileService: ProfileService, private workoutService: WorkoutService, private dailyPlanGeneratorService: DailyPlanGeneratorService) {
    if (profileService.getCurrentUser()) {
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/']);
    }
  }


  ngOnInit() {
    console.log("initializing workouts");
    this.workouts = [];
    // for(var i=0; i< 3; i++){
      // console.log(i);
      this.dailyPlanGeneratorService.genWorkout(((workout1)=>{
        // console.log("adding workout!",workout);
        // this.dailyPlanGeneratorService.genWorkout(((workout2)=>{
        // // console.log("adding workout!",workout);
        //   this.dailyPlanGeneratorService.genWorkout(((workout3)=>{
        //     // console.log("adding workout!",workout);
        //     this.workouts[0] = workout3;
        //     console.log("WO", this.workouts);
        //   }));
        //   this.workouts[1] = workout2;
        //   console.log("WO", this.workouts);
        // // }));
        // workout1.key = "ADFNU36ana9sh93ad"

        // for(let assign in workout1.assignments){
        //   this.assignmentService.addNewAssignment(assign, ());
        // }
        this.workouts[0] = workout1;
        // this.workoutService.addNewWorkout(workout1, ((workoutKey)=>{
        //   this.workoutKey = workoutKey;
        // }));

        console.log("WO", this.workouts);
      }));
    // }
    
    

    // this.dailyPlanGeneratorService.wow();//genAssignment('strength');
    console.log("finishing workouts?");
    // setTimeout(console.log(this.workouts),5000);
  }


}
