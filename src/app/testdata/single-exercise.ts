import { Injectable } from '@angular/core';
import {Exercise} from "../models/exercise";
import {Assignment} from "../models/assignment";


@Injectable()
export class SingleExercise {
    getAssignment() {
        let exercise = new Exercise();
        let assignment = new Assignment();
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
    }
}
