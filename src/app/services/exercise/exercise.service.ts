import {Injectable} from "@angular/core";
import {AngularFire} from "angularfire2";

@Injectable()
export class ExerciseService {

  constructor(private af: AngularFire) {
  }

  getExercise(id: string, callback = (exercise) => {}) {
    this.af.object("/exercises/" + id).subscribe((exercise) => {
      if (!exercise) {
        callback(false);
        return;
      }
      console.log("getting exercise: " + id);
      exercise.$key = id;
      callback(exercise);
      return;
    });
  }

  getExercises(ids: string[], callback = (exercises) => {}) {
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

  getAllExercises(callback = (exercises) => {}) {
    this.af.list("/exercises/").subscribe((exercises) => {
      console.log("getting all exercises");
      callback(exercises);
      return;
    });
  }

}
