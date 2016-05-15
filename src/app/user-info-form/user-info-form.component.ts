import { Component, OnInit } from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";
import { RouteSegment, Router } from '@angular/router';
import {Profile} from "../models/profile";
import {ProfileService} from "../services/profile/profile.service";


@Component({
  moduleId: module.id,
  selector: 'app-user-info-form',
  templateUrl: 'user-info-form.component.html',
  styleUrls: ['user-info-form.component.css'],

  directives: [MaterializeDirective],

  providers: [ProfileService]
})
export class UserInfoFormComponent implements OnInit {
  
  experience: string[];
  sex: string[];
  muscle: string[];
  goal: string[];
  model: any;

  id: string;
  profile: Profile;

  constructor(private profileService: ProfileService, private router: Router) {
    this.experience = ["None", "A little", "Some", "A lot", "Everything there is to know"];
    this.sex = ["female", "male"];
    this.muscle = ["None", "A little", "Average", "Well-built", "Bodybuilder"];
    this.goal = ["Tone Body", "Gain Muscle", "Weight Loss", "Flexibility"];

    this.model = {
      "experience": 0,
      "sex": false,
      "muscle": 0,
      "goal": "Tone Body"
    };
  }

  onSubmit() {
    let newModel = {
      "experience": 0,
      "sex": false,
      "muscle": 0,
      "goal": "Tone Body"

    };
    newModel.experience = this.experience.indexOf(this.model.experience);
    newModel.sex = this.model.sex == "male" ? true : false;
    newModel.muscle = this.muscle.indexOf(this.model.muscle);
    newModel.goal = this.model.goal;

    this.router.navigate(['/dashboard']);
  }


  ngOnInit() {

    // console.log(this.profile);
  }

  routerOnActivate(curr:RouteSegment) {
    this.profile = this.profileService.getCurrentUser();
    if (!this.profile) {
      this.router.navigate(['/']);
    }
  }
}
