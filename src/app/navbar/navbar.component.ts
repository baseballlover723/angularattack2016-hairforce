import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardComponent } from '../+dashboard'


@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  directives: [DashboardComponent],
})

export class NavbarComponent implements OnInit {

	

  constructor(private router : Router) { }

  ngOnInit() {
  }

  onGoToDashboard() {
  	this.router.navigate(['/dashboard']);
  }

  onGoToStatistics() {
    this.router.navigate(['/statistics'])
  }

}
