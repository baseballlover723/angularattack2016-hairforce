import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../services/profile/profile.service";

@Component({
  moduleId: module.id,
  selector: 'app-account',
  templateUrl: 'account.component.html',
  styleUrls: ['account.component.css'],

  providers: [ProfileService]
})
export class AccountComponent implements OnInit {

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
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
