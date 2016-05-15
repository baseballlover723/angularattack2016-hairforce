import {Exercise} from "./exercise";

/**
 * An assignment is an exercise tailored to a specific person.
 */
export class Assignment {
    exercise: Exercise;
    time: number;
    repititions: number;
    sets: number;
    weight: number;
}