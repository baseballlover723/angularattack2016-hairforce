import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Workout} from "../../models/workout";

@Injectable()
export class WorkoutService {

  constructor(private af: AngularFire) {}

  getWorkout(id: string, callback = (workout) => {}) {
    let sub = this.af.object("/workouts/" + id).subscribe((workout) => {
      sub.unsubscribe();
      if (!workout) {
        callback(false);
        return;
      }
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
    let sub = this.af.list("/workouts/").subscribe((workouts) => {
      sub.unsubscribe();
      callback(workouts);
      return;
    });
  }

  addNewWorkout(workout: Workout, callback = (workoutKey) => {}) {
    const promise = this.af.list("/workouts/").push(workout);
    promise.then(_ => {
      workout["$key"] = promise.key();
      callback(workout["$key"]);
    }).catch(err => {
      console.log(err);
      callback(false);
    });
  }

  updateWorkout(workout: Workout, callback = (workoutKey) => {}) {
    let key = workout["$key"];
    delete workout["$key"];
    const promise = this.af.object("/workouts/" + key).update(workout);
    promise.then(_ => {
      callback(key);
    }).catch(err => {
      console.log(err);
      callback(false);
    });
  }


}
