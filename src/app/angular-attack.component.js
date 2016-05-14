"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var angular2_materialize_1 = require('angular2-materialize');
var navbar_1 = require('./navbar');
var router_1 = require('@angular/router');
var _dashboard_1 = require('./+dashboard');
var exercise_card_component_1 = require("./exercise-card/exercise-card.component");
var AngularAttackAppComponent = (function () {
    function AngularAttackAppComponent() {
        this.title = 'Team Hairforce';
    }
    AngularAttackAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'angular-attack-app',
            templateUrl: 'angular-attack.component.html',
            styleUrls: ['angular-attack.component.css'],
            directives: [angular2_materialize_1.MaterializeDirective, navbar_1.NavbarComponent, _dashboard_1.DashboardComponent, exercise_card_component_1.ExerciseCardComponent, router_1.ROUTER_DIRECTIVES],
            providers: [router_1.ROUTER_PROVIDERS]
        }),
        router_1.Routes([
            { path: "/dashboard", component: _dashboard_1.DashboardComponent }
        ])
    ], AngularAttackAppComponent);
    return AngularAttackAppComponent;
}());
exports.AngularAttackAppComponent = AngularAttackAppComponent;
//# sourceMappingURL=angular-attack.component.js.map