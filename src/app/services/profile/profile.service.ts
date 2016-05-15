import {Injectable} from "@angular/core";
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs/Observable";
import {Profile} from "../../models/profile";

@Injectable()
export class ProfileService {
  currentUser: Profile;
  loggedIn: boolean;

  constructor(private af: AngularFire) {
    this.loggedIn = false;
    this.getCurrentUser();
  }

  getCurrentUser(callback = function (profile) {
  }) {
    if (this.loggedIn) {
      callback(this.currentUser);
      return;
    }
    this.getProfile("alsjflskejfaasldfj", (profile) => {
        if (this.isLoggedIn()) {
          callback(this.currentUser);
          return;
        }
        this.currentUser = profile;
        this.loggedIn = true;
        console.log("logged in");
        callback(profile);
        return;
      }
    );
  }

  logOut() {
    console.log("logged out");
    this.currentUser = null;
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  getProfile(id: string, callback = (profile) => {}) {
    this.af.database.object("/profiles/" + id).subscribe(profile => {
      console.log("getting profile: " + id);
      profile.$key = id;
      callback(profile);
      return;
    });
  }

}
