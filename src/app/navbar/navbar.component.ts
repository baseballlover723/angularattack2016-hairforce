import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {DashboardComponent} from "../+dashboard"
import {ProfileService} from "../services/profile/profile.service";
import {Profile} from "../models/profile";


@Component({
  moduleId: module.id,
  selector: "app-navbar",
  templateUrl: "navbar.component.html",
  styleUrls: ["navbar.component.css"],
  directives: [DashboardComponent],
  providers: [ProfileService]
})

export class NavbarComponent implements OnInit {
  currentUser: Profile;
  constructor(private router: Router, private loginService: ProfileService) {
  }

  ngOnInit() {
    this.loginService.getCurrentUser((profile) => {
      this.currentUser = profile;
    });
  }

  onGoToDashboard() {
    this.router.navigate(["/dashboard"]);
  }

  onGoToStatistics() {
    this.router.navigate(['/statistics']);
  }

  signOut() {
    this.loginService.logOut();
  }
}
