import {Injectable} from "@angular/core";
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ExerciseService {

  constructor(private af: AngularFire) {
  }

  getExercise(id: string) {
    return this.af.object("/exercises/" + id);
  }

  getExercises(ids: [string]) {
    return this.af.list("/exercises/", {
      query: {
        equalTo: ids
      }
    });
  }

}
