import {Component, Input, OnInit} from '@angular/core';
import {SimilarExercisesComponent} from "../similar-exercises/similar-exercises.component";
import {Exercise} from "../models/exercise";
import {ExerciseCardComponent} from "../exercise-card/exercise-card.component";
// import { RouterParams } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'app-exercise',
    templateUrl: 'exercise.component.html',
    styleUrls: ['exercise.component.css'],

    directives: [
        SimilarExercisesComponent,
        ExerciseCardComponent
    ]
})
export class ExerciseComponent implements OnInit {

    @Input() exercise:Exercise;

    constructor() {
    }

    ngOnInit() {
        // let id = +this.routeParams.get('id');
    }

}
