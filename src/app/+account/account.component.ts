import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../services/profile/profile.service";
import {DailyPlanGeneratorService} from "../services/dailyPlanGenerator/daily-plan-generator.service";


@Component({
  moduleId: module.id,
  selector: 'app-account',
  templateUrl: 'account.component.html',
  styleUrls: ['account.component.css'],

  providers: [ProfileService, DailyPlanGeneratorService]
})
export class AccountComponent implements OnInit {

  constructor(private profileService: ProfileService, private dailyPlanGeneratorService: DailyPlanGeneratorService) {}

  ngOnInit() {
  }

  linkFacebook() {
    this.profileService.linkFacebook();
  }

  linkGoogle() {
    this.profileService.linkGoogle();
  }

  linkGithub() {
    this.profileService.linkGithub();
  }

  testGenFunction(){
    this.dailyPlanGeneratorService.genAssignment('Legs')
  }

}
