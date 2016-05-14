import {Workout} from "./workout";

/**
 * A user's profile.
 */
export class Profile {

    name: string;
    workouts: Workout[];
    profilePic: string;
    friends: string[];
}