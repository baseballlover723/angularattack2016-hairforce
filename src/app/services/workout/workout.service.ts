import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Workout} from "../../models/workout";
import {AssignmentService} from "../assignment/assignment.service";

@Injectable()
export class WorkoutService {

  constructor(private af: AngularFire, private assignmentService: AssignmentService) {}

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

  getWorkoutWithObject(id: string, callback = (workout) => {}) {
    this.getWorkout(id, (workout) => {
      this.assignmentService.getAssignmentsWithObjects(workout.assignments, (assignments) => {
        workout.assignments = assignments;
        callback(workout);
      });
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

  getWorkoutsWithObjects(ids: string[], callback = (workouts) => {}) {
    var workouts = [];
    for (var index in ids) {
      var id = ids[index];
      this.getWorkoutWithObject(id, (workout) => {
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

  getAllWorkoutsWithObjects(callback = (workouts) => {}) {
    this.getAllWorkouts((workouts) => {
      let count = 0;
      for (let index in workouts) {
        let workout = workouts[index];
        this.assignmentService.getAssignmentsWithObjects(workout.assignments, (assignments) => {
          workout.assignments = assignments;
          count++;
          if (count == workouts.length) {
            callback(workouts);
          }
        });
      }
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
