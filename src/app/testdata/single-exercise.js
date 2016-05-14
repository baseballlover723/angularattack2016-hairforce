"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var exercise_1 = require("../models/exercise");
var assignment_1 = require("../models/assignment");
var SingleExercise = (function () {
    function SingleExercise() {
    }
    SingleExercise.prototype.getAssignment = function () {
        var exercise = new exercise_1.Exercise();
        var assignment = new assignment_1.Assignment();
        exercise.name = "Hammer curls";
        exercise.videoUrl = "https://www.youtube.com/embed/Qon6phzSGWQ";
        exercise.description = "Workout those arms baby!";
        exercise.equipment = "Dumbbell";
        exercise.instructions = "1. Don't suck.\n 2. Do good.";
        exercise.substitutions = null;
        exercise.intensity = 0;
        exercise.type = "strength";
        exercise.typeUrl = "https://drive.google.com/file/d/0B4hCSehUhtC-QS1BdGhpZEw1dXM/preview";
        assignment.exercise = exercise;
        assignment.time = null;
        assignment.repititions = 8;
        assignment.sets = 3;
        assignment.weight = 40;
        return assignment;
    };
    SingleExercise = __decorate([
        core_1.Injectable()
    ], SingleExercise);
    return SingleExercise;
}());
exports.SingleExercise = SingleExercise;
//# sourceMappingURL=single-exercise.js.map