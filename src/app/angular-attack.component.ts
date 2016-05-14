import { Component } from '@angular/core';
import { MaterializeDirective } from 'angular2-materialize';


@Component({
  moduleId: module.id,
  selector: 'angular-attack-app',
  templateUrl: 'angular-attack.component.html',
  styleUrls: ['angular-attack.component.css'],

  directives: [MaterializeDirective]

})
export class AngularAttackAppComponent {
  title = 'Team Hairforce';
}
