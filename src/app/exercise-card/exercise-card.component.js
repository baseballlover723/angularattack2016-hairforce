"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var single_exercise_1 = require("../testdata/single-exercise");
var ExerciseCardComponent = (function () {
    function ExerciseCardComponent(singleAssignmentService) {
        this.singleAssignmentService = singleAssignmentService;
    }
    ExerciseCardComponent.prototype.ngOnInit = function () {
        this.assignment = this.singleAssignmentService.getAssignment();
    };
    ExerciseCardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-exercise-card',
            templateUrl: 'exercise-card.component.html',
            styleUrls: ['exercise-card.component.css'],
            providers: [single_exercise_1.SingleExercise]
        })
    ], ExerciseCardComponent);
    return ExerciseCardComponent;
}());
exports.ExerciseCardComponent = ExerciseCardComponent;
//# sourceMappingURL=exercise-card.component.js.map