import {Injectable} from "@angular/core";
import {AngularFire} from "angularfire2";

@Injectable()
export class ExerciseService {

  constructor(private af: AngularFire) {
  }

  getExercise(id: string) {
    console.log("getting exercise: " + id);
    return this.af.object("/exercises/" + id);
  }

  getExercises(ids: string[], callback) {
    var exercises = [];
    for (var id in ids) {
      id = ids[id];
      this.getExercise(id).subscribe((exercise) => {
        exercises.push(exercise);
        if (ids.length == exercises.length) {
          callback(exercises);
        }
      });
    }
  }

  getAllExercises() {
    console.log("getting all exercises");
    return this.af.list("/exercises/");
  }

}
