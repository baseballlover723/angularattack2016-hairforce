import {Exercise} from "./exercise";

/**
 * An assignment is an exercise tailored to a specific person.
 */
export class Assignment {

    $key: string;
    exercise:Exercise;
    time:number;
    repetitions:number;
    sets:number;
    weight:number;
    completed:boolean;
    feedback:number;

    // constructor();

    constructor(exercise:Exercise, time:number) {
        if (this.exercise !== null) {
            this.exercise = exercise;
            this.exercise.$key = exercise['$key'];
        }
        this.time = time;
    }
}

