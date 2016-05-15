import {Exercise} from "./exercise";

/**
 * A user's rating of a particular exercise
 */

export class ExerciseRating {
	targetExercise: Exercise;
	intensityScaling: number;
    repetitionsScaling: number;
    setsScaling: number;
    timeScaling: number;
    weightScaling: number;
}