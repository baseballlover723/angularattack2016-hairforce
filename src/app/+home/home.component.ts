import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../services/profile/profile.service";
import {ExerciseService} from "../services/exercise/exercise.service";
import {Exercise} from "../models/exercise";
import {AssignmentService} from "../services/assignment/assignment.service";
import {Assignment} from "../models/assignment";

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  providers: [ProfileService, ExerciseService, AssignmentService]

})
export class HomeComponent implements OnInit {

  constructor(private profileService: ProfileService, private exerciseService: ExerciseService,
              private assignmentService: AssignmentService) {}

  ngOnInit() {
  }

  // Google authentication
  onGoogleLogin() {
    this.profileService.googleLogin();
  }

  // Github authentication
  onGithubLogin() {
    this.profileService.githubLogin();
  }

  // Facebook authentication
  onFacebookLogin() {
    this.profileService.fbLogin();
  }

  linkFacebook() {
    this.profileService.linkFacebook();
  }

  linkGoogle() {
    this.profileService.linkGoogle();
  }

  linkGithub() {
    this.profileService.linkGithub();
  }

  testAddExercise() {
    var newExercise: Exercise = new Exercise("nathans execise");
    this.exerciseService.addNewExercise(newExercise, (exercise) => {
      console.log("added new exercise: " + exercise);
    });
  }

  testEditExercise() {
    var newExercise: Exercise = new Exercise("nathans exercise");
    this.exerciseService.addNewExercise(newExercise, (key) => {
      console.log(key);
      console.log(newExercise["$key"]);
      newExercise.name = "this name is changed";
      setTimeout(() => {
        newExercise.description = "this is a description";
        this.exerciseService.updateExercise(newExercise, (key2) => {
          console.log("updated exercise: " + key2);
        });
      }, 2000);
    });
  }

  testAddAssignment() {
    var newExercise: Exercise = new Exercise("nathans execise");
    this.exerciseService.addNewExercise(newExercise, (exerciseKey) => {
      console.log("added new exercise: " + exerciseKey);
      var newAssignment: Assignment = new Assignment(newExercise, 1234);
      this.assignmentService.addNewAssignment(newAssignment, (assignmentKey) => {
        console.log("added new assignment: " + assignmentKey);
      });
    });
  }

  testGetAssignment() {
    this.assignmentService.getAssignment("asoaesjfoacnlk", (assignment) => {

      console.log(assignment);
      console.log(assignment.exercise);
      this.exerciseService.getExercise(assignment.exercise, (exercise) => {
        console.log(exercise);
      });
    });
  }

  // TODO: push new objects to database for nathan
  // TODO: update object to database for jeremy

}
