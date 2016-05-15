import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityComponent } from '../activity';
import {ExerciseService} from "../services/exercise/exercise.service";
import {Exercise} from "../models/exercise";
import {ProfileService} from "../services/profile/profile.service";
import {Profile} from "../models/profile";

@Component({
  moduleId: module.id,
  selector: 'activity-history',
  templateUrl: 'activity-history.component.html',
  styleUrls: ['activity-history.component.css'],

  directives: [ActivityComponent],
  providers: [ProfileService, ExerciseService]

})
export class ActivityHistoryComponent implements OnInit {

  public exercises: Exercise[];
  private profile: Profile;

  constructor(private router: Router, private exerciseService: ExerciseService, private profileService: ProfileService) {}

  ngOnInit() {

    this.profile = this.profileService.getCurrentUser();
    if (this.profile) {
      this.exerciseService.getExercises(this.profile.favorites, (exercises) => {
        this.exercises = exercises;
      });
    }
  }


  startExercise(e){
    this.router.navigate(['/exercises/'+e.$key]);
  }

}
