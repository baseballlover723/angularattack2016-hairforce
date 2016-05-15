import {Injectable} from '@angular/core';
import {AngularFire} from "angularfire2";

@Injectable()
export class AssignmentService {

  constructor(private af: AngularFire) {
  }

  getAssignment(id: string, callback = (assignment) => {}) {
    this.af.object("/assignments/" + id).subscribe((assignment) => {
      console.log("getting assignment: " + id);
      assignment.$key = id;
      callback(assignment);
      return;
    });
  }

  getAssignments(ids: string[], callback = (assignements) => {}) {
    var assignments = [];
    for (var id in ids) {
      id = ids[id];
      this.getAssignment(id, (assignment) => {
        assignments.push(assignment);
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
