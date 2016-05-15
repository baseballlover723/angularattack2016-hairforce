import {Component, OnInit} from "@angular/core";
import {WeekPlanCardComponent} from "../week-plan-card";
import {UserInfoFormComponent} from "../user-info-form/user-info-form.component";
import {MaterializeDirective} from "angular2-materialize";


@Component({
  moduleId: module.id,
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html",
  styleUrls: ["dashboard.component.css"],

  directives: [
    WeekPlanCardComponent,
    UserInfoFormComponent,
    MaterializeDirective]
})
export class DashboardComponent implements OnInit {


  constructor() {
    
  }
 

  ngOnInit() {

  }
  
}
