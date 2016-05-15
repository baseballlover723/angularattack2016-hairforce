import {Injectable} from "@angular/core";
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs/Observable";
import {Profile} from "../../models/profile";

@Injectable()
export class ProfileService {
  public static currentUser: Profile;

  constructor(private af: AngularFire) {
  }

  getCurrentUser() {
    return ProfileService.currentUser;
  }

  logOut() {
    console.log("logged out: " + ProfileService.currentUser.name);
    ProfileService.currentUser = null;
  }

  getProfile(id: string, callback = (profile) => {
  }) {
    this.af.database.object("/profiles/" + id).subscribe((profile) => {
      console.log("getting profile: " + id);
      profile.$key = id;
      callback(profile);
      return;
    });
  }

  login(profile: Profile) {
    ProfileService.currentUser = profile;
    console.log("logged in: " + profile.name);
  }

  findProfile(provider: string, uid: string, callback = (profile) => {
  }) {
    this.af.list("/profiles", {
      query: {
        orderByChild: provider,
        equalTo: uid
      }
    }).subscribe((profile) => {
      callback(profile[0]);
    });
  }

  fbLogin() {
    var ref = new Firebase("https://hairforceattack.firebaseio.com/");
    ref.authWithOAuthPopup("facebook", (error, authData) => {
      console.log("auth data. v");
      console.log(authData);
      this.findProfile("facebookUid", authData.uid, (profile) => {
        if (!profile) {
          return;
        }
        this.login(profile);
      });
    }, {
      remember: "sessionOnly",
      scope: "email,user_likes"
    });
  }

  googleLogin() {
    var ref = new Firebase("https://hairforceattack.firebaseio.com/");
    ref.authWithOAuthPopup("google", (error, authData) => {
      console.log("auth data. v");
      console.log(authData);
      this.findProfile("googleUid", authData.uid, (profile) => {
        if (!profile) {
          return;
        }
        this.login(profile);
      });
    }, {
      remember: "sessionOnly",
      scope: ""
    });
  }

  githubLogin() {
    var ref = new Firebase("https://hairforceattack.firebaseio.com/");
    ref.authWithOAuthPopup("github", (error, authData) => {
      console.log("auth data. v");
      console.log(authData);
      this.findProfile("githubUid", authData.uid, (profile) => {
        if (!profile) {
          return;
        }
        this.login(profile);
      });
    }, {
      remember: "sessionOnly",
      scope: "email,user_likes"
    });
  }

}
