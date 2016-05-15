import{ Component, OnInit } from '@angular/core';
import {ProfileService} from "../services/profile/profile.service";
import { Router } from '@angular/router';
import {Profile} from "../models/profile";

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  providers: [ProfileService]

})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private profileService: ProfileService) {}

  ngOnInit() {
  }

  // Google authentication
  onGoogleLogin() {
    this.profileService.googleLogin((profile)=> {
      this.routeUser();
    });
  }

  // Github authentication
  onGithubLogin() {
    this.profileService.githubLogin((profile)=> {
      this.routeUser();

    });
  }

  // Facebook authentication
  onFacebookLogin() {
    this.profileService.fbLogin((profile)=> {
      this.routeUser();
    });
  }

  routeUser() {
    let profile = this.profileService.getCurrentUser();
    // console.log("MINE", this.profileService.getCurrentUser());
    if (profile.experience !== null) {
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/registration/' + profile['$key']]);
    }
  }
}
