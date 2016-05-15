import {Injectable} from "@angular/core";
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs/Observable";
import {Profile} from "../../models/profile";
import {Exercise} from "../../models/exercise";
import {ExerciseRating} from "../../models/exerciserating";
import {ExerciseService} from "../../services/exercise/exercise.service";



@Injectable()
export class ProfileService {
  public static currentUser: Profile;
  private ref;

  constructor(private af: AngularFire) {
    this.ref = new Firebase("https://hairforceattack.firebaseio.com/");
    const currentAuth = this.ref.getAuth();
    if (!ProfileService.currentUser && currentAuth) {
      this.findProfile(currentAuth.provider + "Uid", currentAuth.uid, (profile) => {
        if (!profile || ProfileService.currentUser) {
          return;
        }
        this.login(profile, (profile)=> {
        });
      });
    }

  }

  getCurrentUser() {
    return ProfileService.currentUser;
  }

  logOut() {
    if (ProfileService.currentUser) {
      console.log("logged out: " + ProfileService.currentUser.name);
    }
    this.ref.unauth();
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
    // Nathan added - Update all ratings just in case
    this.updateRatings();
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
    var settings = {
      remember: "default",
      scope: "email,user_likes"
    };
    if (provider == "google") {
      settings.scope = "";
    }
    this.ref.authWithOAuthPopup(provider, (error, authData) => {
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

  updateRatings(){
    var availExercises = [];
    var person = this.getCurrentUser();

    (new ExerciseService(this.af)).getAllExercises(((possibleExercises) =>{
      availExercises = possibleExercises;

        // Get existing keys from current user
      var existingKeys = [];
      if(person.ratings){
        for(var i=0; i<person.ratings.length; i++){
          existingKeys.push(person.ratings[i].targetExerciseKey);
        }
      }

      // Find any missing Keys, and add to todo
      var todo = [];
      for(var i=0; i<availExercises.length; i++){
        if(existingKeys.indexOf(availExercises[i]["$key"]) < 0){
          todo.push(availExercises[i]["$key"]);
        }
      }
      // console.log("existingKeys",existingKeys);

      // Generate Default ratings for each missing entry
      var updateData = {};
      if(person.ratings){
        updateData["ratings"] = person.ratings;
      } else {
        updateData["ratings"] = [];
      }
      // console.log("todo",todo);
      // Run through Todolist
      for(var i=0; i<todo.length; i++){
        var tempRating = new ExerciseRating();
        tempRating.targetExerciseKey = todo[i];
        tempRating.intensityScaling = 1;
        tempRating.repetitionsScaling = 1;
        tempRating.setsScaling = 1;
        tempRating.timeScaling = 1;
        tempRating.weightScaling = 1;

        updateData["ratings"].push(tempRating);
      }

      // Finally, Commit up Ratings
      this.af.object("/profiles/" + ProfileService.currentUser["$key"]).update(updateData);
    }));

  }

  // getRating(exercise: Exercise){
  //   for(var i; i < this.getCurrentUser().ratings.length; i++){
  //     if(this.getCurrentUser().ratings[i].targetExerciseKey == exercise){
  //       return this.getCurrentUser().ratings[i];
  //     }
  //   }
  // }
}
