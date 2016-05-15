import {Injectable} from "@angular/core";
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs/Observable";
import {Profile} from "../../models/profile";
import {Exercise} from "../../models/exercise";
import {ExerciseRating} from "../../models/exerciserating";



@Injectable()
export class ProfileService {
  public static currentUser: Profile;

  constructor(private af: AngularFire) {
  }

  getCurrentUser() {
    return ProfileService.currentUser;
  }

  logOut() {
    if (ProfileService.currentUser) {
      console.log("logged out: " + ProfileService.currentUser.name);
    }
    ProfileService.currentUser = null;
  }

  getProfile(id: string, callback = (profile) => {
  }) {
    this.af.database.object("/profiles/" + id).subscribe((profile) => {
      console.log("getting profile: " + id);
      (profile).$key = id;
      callback(profile);
      return;
    });
  }

  addNewProfile(profile: Profile, callback = (profileKey) => {
  }) {
    const promise = this.af.list("/profiles/").push(profile);
    promise.then(_ => {
      profile["$key"] = promise.key();
      callback(profile["$key"]);
    }).catch(err => {
      console.log(err);
      callback(false);
    });
  }


  login(profile: Profile, callback = (profile)=> {}) {
    ProfileService.currentUser = profile;
    console.log("logged in: " + profile.name);
    callback(profile);
  }

  findProfile(provider: string, uid: string, callback = (profile) => {}) {
    this.af.list("/profiles", {
      query: {
        orderByChild: provider,
        equalTo: uid
      }
    }).subscribe((profile) => {
      callback(profile[0]);
    });
  }

  socialLogin(provider: string, callback = (authData) => {}) {
    var ref = new Firebase("https://hairforceattack.firebaseio.com/");
    var settings = {
      remember: "sessionOnly",
      scope: "email,user_likes"
    };
    if (provider == "google") {
      settings.scope = "";
    }
    ref.authWithOAuthPopup(provider, (error, authData) => {
      console.log(provider + " auth data. v");
      console.log(authData);
      if (!error) {
        callback(authData);
      }
    }, settings);
  }

  fbLogin(callback = (profile)=> {

  }) {
    this.socialLogin("facebook", (authData) => {
      this.findProfile("facebookUid", authData.uid, (profile) => {
        if (!profile) {
          return;
        }
        this.login(profile, (profile)=> {
          callback(profile);
        });
      });
    });
  }

  googleLogin(callback = (profile)=> {

  }) {
    this.socialLogin("google", (authData) => {
      this.findProfile("googleUid", authData.uid, (profile) => {
        if (!profile) {
          return;
        }
        this.login(profile, (profile) => {
          callback(profile);
        });
      });
    });
  }

  githubLogin(callback = (profile) => {

  }) {
    this.socialLogin("github", (authData) => {
      this.findProfile("githubUid", authData.uid, (profile) => {
        if (!profile) {
          return;
        }
        this.login(profile, (profile) => {
          callback(profile);
        });
      });
    });
  }

  link(provider: string, callback = (authData) => {}) {
    if (!ProfileService.currentUser) {
      callback(false);
      return;
    }
    this.socialLogin(provider, (authData) => {
      var providerStr = provider + "Uid";
      var updateData = {};
      updateData[providerStr] = authData.uid;
      this.af.object("/profiles/" + ProfileService.currentUser["$key"]).update(updateData);
      callback(authData);
    });
  }

  linkFacebook() {
    this.link("facebook");
  }

  linkGoogle() {
    this.link("google");
  }

  linkGithub() {
    this.link("github");
  }

  getRating(exercise: Exercise){
    for(var i; i < this.getCurrentUser().ratings.length; i++){
      if(this.getCurrentUser().ratings[i].targetExercise == exercise){
        return this.getCurrentUser().ratings[i];
      }
    }
  }
}
