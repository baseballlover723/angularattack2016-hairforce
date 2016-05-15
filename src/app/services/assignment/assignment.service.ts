import {Injectable} from '@angular/core';
import {AngularFire} from "angularfire2";
import {Assignment} from "../../models/assignment";
import {ExerciseService} from "../exercise/exercise.service";

@Injectable()
export class AssignmentService {

  constructor(private af: AngularFire, private exerciseService: ExerciseService) {
  }

  getAssignment(id: string, callback = (assignment) => {}) {
    let sub = this.af.object("/assignments/" + id).subscribe((assignment) => {
      sub.unsubscribe();
      if (!assignment) {
        callback(false);
        return;
      }
      assignment.$key = id;
      callback(assignment);
      return;
    });
  }

  getAssignmentWithObject(id: string, callback = (assignment) => {}) {
      this.getAssignment(id, (assignment) => {
        this.exerciseService.getExercise(assignment.exercise, (exercise) => {
          assignment.exercise = exercise;
          callback(assignment);
        });
      });
  }

  getAssignments(ids: string[], callback = (assignements) => {}) {
    var assignments = [];
    for (var index in ids) {
      var id = ids[index];
      this.getAssignment(id, (assignment) => {
        if (assignment) {
          assignments.push(assignment);
        } else {
          ids.splice(parseInt(index), 1);
        }
        if (ids.length == assignments.length) {
          callback(assignments);
        }
      });
    }
  }

  getAssignmentsWithObjects(ids: string[], callback = (assignements) => {}) {
    var assignments = [];
    for (var index in ids) {
      var id = ids[index];
      this.getAssignmentWithObject(id, (assignment) => {
        if (assignment) {
          assignments.push(assignment);
        } else {
          ids.splice(parseInt(index), 1);
        }
        if (ids.length == assignments.length) {
          callback(assignments);
        }
      });
    }
  }

  getAllAssignments(callback = (assignments) => {}) {
    let sub = this.af.list("/assignments/").subscribe((assignments) => {
      sub.unsubscribe();
      callback(assignments);
      return;
    });
  }

  getAllAssignmentsWithObjects(callback = (assignments) => {}) {
    this.getAllAssignments((assignments) => {
      let count = 0;
      for (let index in assignments) {
        let assignment = assignments[index];
        this.exerciseService.getExercise(assignment.exercise, (exercise) => {
          assignment.exercise = exercise;
          count++;
          if (count == assignments.length) {
            callback(assignments);
          }
        });
      }
    });
  }

  addNewAssignment(assignment: Assignment, callback = (assignmentKey) => {}) {
    const promise = this.af.list("/assignments/").push(assignment);
    promise.then(_ => {
      assignment["$key"] = promise.key();
      callback(assignment["$key"]);
    }).catch(err => {
      console.log(err);
      callback(false);
    });
  }

  updateAssignment(assignment: Assignment, callback = (assignmentKey) => {}) {
    let key = assignment["$key"];
    let exercisekey = assignment.exercise['$key'];
    delete assignment["$key"];
    delete assignment.exercise['$key'];
    // console.log(assignment);
    const promise = this.af.object("/assignments/" + key).update(assignment);
    promise.then(_ => {
      console.log("GOT", key);
      callback(key);
    }).catch(err => {
      console.log(err);
      callback(false);
    });
  }


}
