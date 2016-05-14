import {Component, OnInit} from "@angular/core";
import {MyServiceService} from "../services/my-service/my-service.service";
import {WeekPlanCardComponent} from "../week-plan-card";


@Component({
  moduleId: module.id,
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html",
  styleUrls: ["dashboard.component.css"],

  directives: [WeekPlanCardComponent],
  providers: [MyServiceService]
})
export class DashboardComponent implements OnInit {
  constructor(private myService: MyServiceService){
  }

  ngOnInit() {
  }
}
