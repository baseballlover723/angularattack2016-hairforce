import {Component, OnInit} from "@angular/core";
import {WeekPlanCardComponent} from "../week-plan-card";

@Component({
  moduleId: module.id,
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html",
  styleUrls: ["dashboard.component.css"],

  directives: [WeekPlanCardComponent],
})
export class DashboardComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }



}
