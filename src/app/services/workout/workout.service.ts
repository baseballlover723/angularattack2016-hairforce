import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";

@Injectable()
export class WorkoutService {

  constructor(private af: AngularFire) {}

  getWorkout(id: string, callback = (workout) => {}) {
    this.af.object("/workouts/" + id).subscribe((workout) => {
      if (!workout) {
        callback(false);
        return;
      }
      console.log("getting workout: " + id);
      workout.$key = id;
      callback(workout);
      return;
    });
  }

  getWorkouts(ids: string[], callback = (workouts) => {}) {
    var workouts = [];
    for (var index in ids) {
      var id = ids[index];
      this.getWorkout(id, (workout) => {
        if (workout) {
          workouts.push(workout);
        } else {
          ids.splice(parseInt(index), 1);
        }
        if (ids.length == workouts.length) {
          callback(workouts);
        }
      });
    }
  }

  getAllWorkouts(callback = (workouts) => {}) {
    this.af.list("/workouts/").subscribe((workouts) => {
      console.log("getting all workouts");
      callback(workouts);
      return;
    });
  }

}
