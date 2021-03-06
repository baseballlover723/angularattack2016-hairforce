import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {DashboardComponent} from "../+dashboard";
import {ProfileService} from "../services/profile/profile.service";
import {SigninModalComponent} from "../signin-modal/signin-modal.component";
import {MaterializeDirective} from "angular2-materialize";



@Component({
  moduleId: module.id,
  selector: "app-navbar",
  templateUrl: "navbar.component.html",
  styleUrls: ["navbar.component.css"],
  directives: [DashboardComponent, SigninModalComponent, MaterializeDirective],
  providers: [ProfileService]
})

export class NavbarComponent implements OnInit {
  constructor(private router: Router, private profileService: ProfileService) {
  }

  ngOnInit() {
  }


  onGoToDashboard() {
    this.router.navigate(["/dashboard"]);
  }

  onGoToStatistics() {
    this.router.navigate(['/statistics']);
  }

  onGoToHome() {
    this.router.navigate(['/']);
  }

  onGoToAccount() {
    this.router.navigate(['/account']);
  }

  signOut() {
    this.profileService.logOut();
    this.router.navigate(['/'])
  }
}
