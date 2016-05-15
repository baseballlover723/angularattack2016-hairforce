import {Exercise} from "./exercise";

/**
 * An assignment is an exercise tailored to a specific person.
 */
export class Assignment {
    exercise:Exercise;
    time:number;
    repetitions:number;
    sets:number;
    weight:number;
    completed:boolean;
    feedback:number;

    // constructor();

    constructor(exercise:Exercise, time:number) {
        if (this.exercise) {
            this.exercise = exercise["$key"];
        }
        this.time = time;
    }
}

