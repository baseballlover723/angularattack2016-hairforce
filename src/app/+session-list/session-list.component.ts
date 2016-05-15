import {Component, OnInit, Input} from '@angular/core';
import {Workout} from "../models/workout";
import {Assignment} from "../models/assignment";
import {AssignmentCardComponent} from "../assignment-card";
import {RouteSegment, Router} from '@angular/router';
import {WorkoutService} from "../services/workout/workout.service";
import {AssignmentService} from "../services/assignment/assignment.service";
import {ExerciseService} from "../services/exercise/exercise.service";

@Component({
    moduleId: module.id,
    selector: 'app-session-list',
    templateUrl: 'session-list.component.html',
    styleUrls: ['session-list.component.css'],

    directives: [AssignmentCardComponent],
    providers: [WorkoutService, AssignmentService, ExerciseService]
})
export class SessionListComponent implements OnInit {
    private id:string;

    workout:Workout;

    // Build query to place all assignments here
    assignments:Assignment[];


    constructor(private ws:WorkoutService, private router:Router, private assignmentService:AssignmentService, private exerciseService:ExerciseService) {
    }

    ngOnInit() {
    }

    finishWorkout() {
        for (let assignment of this.assignments) {
            this.assignmentService.updateAssignment(assignment);
        }
        this.router.navigate(['/statistics/' + this.id]);
    }


    routerOnActivate(curr:RouteSegment) {
        this.id = curr.getParam('id');
        this.ws.getWorkout(this.id, (workout) => {
            this.workout = workout;
            let strings:string[] = workout.assignments;
            this.assignmentService.getAssignments(strings, (assignments) => {
                this.assignments = assignments;

                for (let i = 0; i < this.assignments.length; i++) {
                    this.exerciseService.getExercise(assignments[i].exercise, (exercise) => {
                        this.assignments[i].exercise = exercise;
                        console.log(this.assignments[i]);
                    });
                }
            });
        });
    }
}
