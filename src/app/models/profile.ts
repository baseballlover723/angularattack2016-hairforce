import {Workout} from "./workout";

/**
 * A user's profile.
 */
export class Profile {

    name: string;
    profilePic: string;
    workouts: Workout[];
    friends: string[];
    favorites: string[];

    // UID's for the various login services
    facebookUid: string;
    githubUid: string;
    googleUid: string;

    // The user's experience with weights
    experience: number;

    // User's biological sex
    sex: boolean;

    // User's muscle density (self-observed)
    muscle: number;

    // The user's end goals
    goal: string;

}