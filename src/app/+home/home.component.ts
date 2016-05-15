import{ Component, OnInit } from '@angular/core';
import {ProfileService} from "../services/profile/profile.service";
import { Router } from '@angular/router';

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
    this.profileService.googleLogin();
    this.registerUser();
  }

  // Github authentication
  onGithubLogin() {
    this.profileService.githubLogin();
    this.registerUser();
  }

  // Facebook authentication
  onFacebookLogin() {
    this.profileService.fbLogin();
    this.registerUser();
  }

  registerUser() {
    this.router.navigate(['/registration']);
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

}
