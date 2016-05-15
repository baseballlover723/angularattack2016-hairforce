import {Injectable} from "@angular/core";
import {AngularFire} from "angularfire2";
import {Exercise} from "../../models/exercise";

@Injectable()
export class ExerciseService {

  constructor(private af: AngularFire) {
  }

  getExercise(id: string, callback = (exercise) => {
  }) {
    let sub = this.af.object("/exercises/" + id).subscribe((exercise) => {
      sub.unsubscribe();
      if (!exercise) {
        callback(false);
        return;
      }
      // console.log("getting exercise: " + id);
      exercise.$key = id;
      callback(exercise);
      return;
    });
  }

  getAllTypes(callback = (types) => {
  }) {
    let sub = this.af.list("/types/").subscribe((types) => {
      // console.log("getting all Types");
      sub.unsubscribe();
      callback(types);
      return;
    });
  }

  getExercises(ids: string[], callback = (exercises) => {
  }) {
    var exercises = [];
    for (var index in ids) {
      var id = ids[index];
      this.getExercise(id, (exercise) => {
        if (exercise) {
          exercises.push(exercise);
        } else {
          ids.splice(parseInt(index), 1);
        }
        if (ids.length == exercises.length) {
          callback(exercises);
        }
      });
    }
  }

  getAllExercises(callback = (exercises) => {
  }) {

    let sub = this.af.list("/exercises/").subscribe((exercises) => {
      // console.log("getting all exercises", exercises);
      sub.unsubscribe();
      callback(exercises);
      // return;
    });
  }

  addNewExercise(exercise: Exercise, callback = (exerciseKey) => {
  }) {
    const promise = this.af.list("/exercises/").push(exercise);
    promise.then(_ => {
      exercise["$key"] = promise.key();
      callback(exercise["$key"]);
    }).catch(err => {
      console.log(err);
      callback(false);
    });
  }

  updateExercise(exercise: Exercise, callback = (exerciseKey) => {}) {
    let key = exercise["$key"];
    delete exercise["$key"];
    // console.log(exercise);
    const promise = this.af.object("/exercises/" + key).update(exercise);
    promise.then(_ => {
      callback(key);
    }).catch(err => {
      console.log(err);
      callback(false);
    });
  }

}
