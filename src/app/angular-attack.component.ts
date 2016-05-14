import { Component } from '@angular/core';
import { MaterializeDirective } from 'angular2-materialize';
import { NavbarComponent } from './navbar';
import { Routes, ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from '@angular/router';
import { DashboardComponent } from './+dashboard'
import {SessionListComponent} from "./+session-list/session-list.component";
import {StatisticsComponent} from "./+statistics/statistics.component";

@Component({
  moduleId: module.id,
  selector: 'angular-attack-app',
  templateUrl: 'angular-attack.component.html',
  styleUrls: ['angular-attack.component.css'],

  directives: [MaterializeDirective,
    NavbarComponent,
    DashboardComponent,
    ROUTER_DIRECTIVES],
    
  providers: [ROUTER_PROVIDERS]
})

@Routes([
	{path:"/dashboard",component:DashboardComponent},
    {path: '/session', component: SessionListComponent},
    {path: '/statistics', component: StatisticsComponent}
])
export class AngularAttackAppComponent {
  title = 'Team Hairforce';
}
