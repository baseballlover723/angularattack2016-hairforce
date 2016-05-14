import {Assignment} from "./assignment";

/**
 * A workout is an aggregation of assignments.
 */
export class Workout {
    date: number;
    assignments: Assignment[];
    intensity: number;
}