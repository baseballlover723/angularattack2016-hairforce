import {Injectable} from "@angular/core";
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs/Observable";
import {Profile} from "../../models/profile";

@Injectable()
export class LoginService {
  currentUser: Observable<Profile>;
  loggedIn: boolean;

  constructor(private af: AngularFire) {
    this.loggedIn = false;
  }

  getCurrentUser() {
    if (this.loggedIn) {
      return this.currentUser;
    }
    this.loadCurrentUser((profile) => {
      return profile;
    });
  }

  loadCurrentUser(callback) {
    if (this.loggedIn) {
      callback(this.currentUser);
      return;
    }
    this.af.database.object("/profiles/alsjflskejfaasldfj").subscribe(profile => {
        console.log("got data");
        this.currentUser = profile;
        this.loggedIn = true;
        callback(profile);
        return;
      }
    );
  }

  logOut(callback) {
    console.log("logged out");
    this.currentUser = null;
    this.loggedIn = false;
    callback();
  }

  isLoggedIn() {
    return this.loggedIn;
  }

}
