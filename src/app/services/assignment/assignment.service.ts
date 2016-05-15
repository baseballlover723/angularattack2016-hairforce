import {Injectable} from '@angular/core';
import {AngularFire} from "angularfire2";

@Injectable()
export class AssignmentService {

  constructor(private af: AngularFire) {
  }

  getAssignment(id: string, callback = (assignment) => {}) {
    this.af.object("/assignments/" + id).subscribe((assignment) => {
      if (!assignment) {
        callback(false);
        return;
      }
      console.log("getting assignment: " + id);
      assignment.$key = id;
      callback(assignment);
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

}
