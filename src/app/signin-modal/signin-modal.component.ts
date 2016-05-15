import { Component, OnInit } from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";
import {ProfileService} from "../services/profile/profile.service";
import {Router} from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-signin-modal',
  templateUrl: 'signin-modal.component.html',
  styleUrls: ['signin-modal.component.css'],
  
  directives: [MaterializeDirective]
})
export class SigninModalComponent implements OnInit {

  constructor(private profileService: ProfileService, private router: Router) {}

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
