import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {DashboardComponent} from "../+dashboard"
import {LoginService} from "../services/login/login.service";


@Component({
  moduleId: module.id,
  selector: "app-navbar",
  templateUrl: "navbar.component.html",
  styleUrls: ["navbar.component.css"],
  directives: [DashboardComponent],
  providers: [LoginService]
})

export class NavbarComponent implements OnInit {
  constructor(private router: Router, private loginService: LoginService) {
  }

  ngOnInit() {
    this.loginService.getCurrentUser();
  }

  onGoToDashboard() {
    this.router.navigate(["/dashboard"]);
  }

  signOut() {
    this.loginService.logOut(() => {
    });
  }

}
