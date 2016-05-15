import{ Component, OnInit } from '@angular/core';
import {ProfileService} from "../services/profile/profile.service";
import { Router } from '@angular/router';
import {SigninModalComponent} from "../signin-modal/signin-modal.component";
import {MaterializeDirective} from "angular2-materialize";


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

  }

  onGithubSignup() {

  }

  onGoogleSignup() {

  }
}
