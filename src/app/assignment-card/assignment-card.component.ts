import { Component, Input, OnInit } from '@angular/core';
import {Assignment} from "../models/assignment";
import {ProfileService} from "../services/profile/profile.service";
import {Profile} from "../models/profile";

@Component({
  moduleId: module.id,
  selector: 'app-assignment-card',
  templateUrl: 'assignment-card.component.html',
  styleUrls: ['assignment-card.component.css'],

  providers: [ProfileService]
})
export class AssignmentCardComponent implements OnInit {

  @Input() assignment: Assignment;
  private profile: Profile;
  
  constructor(private profileService: ProfileService) {
  }

  ngOnInit() {
    this.profile = this.profileService.getCurrentUser();
  }

  completeSet() {
    this.assignment.completed = !this.assignment.completed;
  }

  favoriteExercise() {
    // if (this.profile) {
    //   if (this.profile.favorites) {
    //     this.profile.favorites.push(this.assignment.$key);
    //   } else {
    //     this.profile.favorites = [this.assignment.$key];
    //   }
    // }
    //
    // this.profileService.updateProfile(this.profile);
  }
}
