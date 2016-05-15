import {Component, Input, OnInit} from '@angular/core';
import {SimilarExercisesComponent} from "../similar-exercises/similar-exercises.component";
import {Exercise} from "../models/exercise";
import {ExerciseCardComponent} from "../exercise-card/exercise-card.component";
// import { RouterParams } from "@angular/router";
import {RouteSegment} from '@angular/router';
import {ExerciseService} from "../services/exercise/exercise.service";

@Component({
    moduleId: module.id,
    selector: 'app-exercise',
    templateUrl: 'exercise.component.html',
    styleUrls: ['exercise.component.css'],

    directives: [
        SimilarExercisesComponent,
        ExerciseCardComponent
    ],

    providers: [
        ExerciseService
    ]
})
export class ExerciseComponent implements OnInit {

    exercise:Exercise;
    id:string;
    isLoading:boolean;

    constructor(private exerciseService:ExerciseService) {
        this.isLoading = true;
    }

    ngOnInit() {
        // let id = +this.routeParams.get('id');
        this.exerciseService.getExercise(this.id, (exercise) => {
            this.exercise = exercise;
            this.isLoading = false;
        });
    }

    routerOnActivate(curr:RouteSegment) {
        this.id = curr.getParam('id');
        console.log(this.id);

    }

}
