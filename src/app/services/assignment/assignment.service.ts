import {Injectable} from '@angular/core';
import {AngularFire} from "angularfire2";
import {Assignment} from "../../models/assignment";

@Injectable()
export class AssignmentService {

  constructor(private af: AngularFire) {
  }

  getAssignment(id: string, callback = (assignment) => {}) {
    // let assignment = this.af.list('/assignments/', {
    //   query: {
    //     orderByKey: true,
    //     equalTo: id
    //   }
    // });
    //
    // assignment.subscribe(item => {
    //   console.log("GOT", item);
    // });
    // console.log("Retreived", assignment);
    let assign = this.af.object("/assignments/" + id);
    let assignmentSubscription = assign.subscribe((assignment: Assignment) => {
      if (!assignment) {
        callback(false);
        return;
      }

      assignment.$key = id;
      callback(assignment);
      assignmentSubscription.unsubscribe();
      return;
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

  getAllAssignments(callback = (assignments) => {}) {
    this.af.list("/assignments/").subscribe((assignments) => {
      console.log("getting all assignments");
      callback(assignments);
      return;
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
