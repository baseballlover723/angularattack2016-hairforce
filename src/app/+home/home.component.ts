import{ Component, OnInit } from '@angular/core';
import {ProfileService} from "../services/profile/profile.service";
import { Router } from '@angular/router';
import {SigninModalComponent} from "../signin-modal/signin-modal.component";
import {MaterializeDirective} from "angular2-materialize";
import {Profile} from "../models/profile";


@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],

  directives: [SigninModalComponent, MaterializeDirective],
  providers: [ProfileService]

})
export class HomeComponent implements OnInit {

  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit() {
  }

  onFacebookSignup() {
    this.profileService.socialLogin("facebook", (authData) => {
      this.profileService.findProfile("facebookUid", authData.uid, (profile) => {
        if (profile) {
          this.profileService.login(profile);
          return;
        }
        let name: string = authData.facebook.displayName;
        let email: string = authData.facebook.email;
        let profilePic: string = authData.facebook.profileImageURL;
        let sex: boolean = authData.facebook.cachedUserProfile.gender != "female";
        profile = new Profile(name, email, profilePic, sex);
        profile.facebookUid = authData.uid;
        this.profileService.addNewProfile(profile);
        console.log(profile);
      });
    });
  }

  onGithubSignup() {

  }

  onGoogleSignup() {

  }
}
