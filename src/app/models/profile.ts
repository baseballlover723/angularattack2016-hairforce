import {Workout} from "./workout";

/**
 * A user's profile.
 */
export class Profile {

  name: string;
  email: string;
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

  constructor(name: string, email: string, profilePic: string, sex: boolean) {
    this.name = name;
    this.email = email;
    this.profilePic = profilePic;
    this.sex = sex;

    this.workouts = [];
    this.friends = [];
    this.favorites = [];

    this.facebookUid = "";
    this.githubUid = "";
    this.googleUid = "";

    this.experience = 0;
    this.sex = true;
    this.muscle = 0;
    this.goal = "";
  }
}
