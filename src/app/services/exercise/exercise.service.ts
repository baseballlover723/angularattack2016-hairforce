import {Injectable} from "@angular/core";
import {AngularFire} from "angularfire2";

@Injectable()
export class ExerciseService {

  constructor(private af: AngularFire) {
  }

  getExercise(id: string, callback = (exercise) => {}) {
    this.af.object("/exercises/" + id).subscribe((exercise) => {
      console.log("getting exercise: " + id);
      exercise.$key = id;
      callback(exercise);
      return;
    });
  }

  getExercises(ids: string[], callback = (exercises) => {}) {
    var exercises = [];
    for (var id in ids) {
      id = ids[id];
      this.getExercise(id, (exercise) => {
        exercises.push(exercise);
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
