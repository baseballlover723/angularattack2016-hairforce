import {Component, OnInit} from "@angular/core";
import {WeekPlanCardComponent} from "../week-plan-card";
import {UserInfoFormComponent} from "../user-info-form/user-info-form.component";
import {MaterializeDirective} from "angular2-materialize";
import {ProfileService} from "../services/profile/profile.service";
import {Router} from '@angular/router';


@Component({
  moduleId: module.id,
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html",
  styleUrls: ["dashboard.component.css"],

  directives: [
    WeekPlanCardComponent,
    UserInfoFormComponent,
    MaterializeDirective],

  providers: [ProfileService]
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
