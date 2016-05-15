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
          this.router.navigate(['/dashboard']);
          return;
        }
        let name: string = authData.facebook.displayName;
        let email: string = authData.facebook.email;
        let profilePic: string = authData.facebook.profileImageURL;
        let sex: boolean = authData.facebook.cachedUserProfile.gender != "female";
        profile = new Profile(name, email, profilePic, sex);
        profile.facebookUid = authData.uid;
        this.profileService.addNewProfile(profile, (profileKey) => {
          this.profileService.login(profile, () => {
            this.router.navigate(['/registration']);
          });
        });
      });
    });
  }

  onGithubSignup() {
    this.profileService.socialLogin("github", (authData) => {
      this.profileService.findProfile("githubUid", authData.uid, (profile) => {
        if (profile) {
          this.profileService.login(profile);
          this.router.navigate(['/dashboard']);
          return;
        }
        let name: string = authData.github.displayName;
        let email: string = authData.github.email;
        let profilePic: string = authData.github.profileImageURL;
        let sex: boolean = true;
        profile = new Profile(name, email, profilePic, sex);
        profile.githubUid = authData.uid;
        this.profileService.addNewProfile(profile, (profileKey) => {
          this.profileService.login(profile, () => {
            this.router.navigate(['/registration']);
          });
        });
      });
    });

  }

  onGoogleSignup() {
    this.profileService.socialLogin("google", (authData) => {
      this.profileService.findProfile("googleUid", authData.uid, (profile) => {
        if (profile) {
          this.profileService.login(profile);
          this.router.navigate(['/dashboard']);
          return;
        }
        let name: string = authData.google.displayName;
        let email: string = "";
        let profilePic: string = authData.google.profileImageURL;
        let sex: boolean = true;
        profile = new Profile(name, email, profilePic, sex);
        profile.googleUid = authData.uid;
        this.profileService.addNewProfile(profile, (profileKey) => {
          this.profileService.login(profile, () => {
            this.router.navigate(['/registration']);
          });
        });
      });
    });

  }
}
