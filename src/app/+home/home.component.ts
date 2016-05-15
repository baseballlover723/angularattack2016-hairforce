import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../services/profile/profile.service";

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  providers: [ProfileService]

})
export class HomeComponent implements OnInit {

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
  }

  // Google authentication
  onGoogleLogin() {
    this.profileService.googleLogin();
  }

  // Github authentication
  onGithubLogin() {
    this.profileService.githubLogin();
  }

  // Facebook authentication
  onFacebookLogin() {
    this.profileService.fbLogin();
  }
}
