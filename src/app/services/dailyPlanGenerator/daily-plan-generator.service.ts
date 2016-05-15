import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Exercise} from "../../models/exercise";
import {ExerciseRating} from "../../models/exerciserating";
import {Assignment} from "../../models/assignment";
import {Profile} from "../../models/profile";
import {ProfileService} from "../../services/profile/profile.service";
import {ExerciseService} from "../../services/exercise/exercise.service";
import {Observable} from "rxjs/Observable";
// import 'rxjs/add/operator/forkJoin';
import 'rxjs/add/observable/forkJoin';


@Injectable()
export class DailyPlanGeneratorService {

  constructor(private af: AngularFire) {}

  // Workout Settings Algorithm 

	/* inputs:
		Experience
		Gender
		Muscle 'Level'
		Exercise Goal - tone, mass, endurance
		
	*/

	// To be run for all users, whenever a new card
	// has been created and added to the DB
	// function genUserRating(){
	// 	person.experience
	// 	person.gender
	// 	person.muscle
	// 	person.goal

	// 	person.current append 
	// }

	genRandomAssignment(){
		var person = (new ProfileService(this.af)).getCurrentUser();

		// Generate Random index in the person's ratings
		var min = 0;
		var max = person.ratings.length - 1;
		var index = Math.floor(Math.random() * (max - min + 1)) + min;
		var chosenRating = person.ratings[index];
		var chosenExerciseKey = chosenRating.targetExerciseKey;

		// Get the target exercise out of the DB
		var chosenExercise = new Exercise("null");
		return (new ExerciseService(this.af)).getExercise(chosenExerciseKey, ((val) =>{

			chosenExercise = val
			
			console.log("ChosenExercise: ",chosenExercise);
			console.log("type:",chosenExercise.type)
			
			// Copy Json, modify based on user vars
			// TODO: reasonable scaling
			var assign = new Assignment(chosenExercise, 0);
			assign.exercise = chosenExercise;
			assign.time = chosenExercise.time;
			assign.repetitions = chosenExercise.repetitions;
			assign.sets = chosenExercise.sets;
			assign.weight = chosenExercise.weight * person.muscle + chosenRating.intensityScaling;
			assign.completed = false;
	        assign.feedback = 0;

			return assign;
		}))
		// console.log(assign);
	}



	// TODO: Refine numbers for scaling purposes
	genAssignment(type: string){
		var person = (new ProfileService(this.af)).getCurrentUser();

		// Generate Random Exercise, with the given type
		// TODO: Oh god it's ugly dont look
		var gotType = '';
		
		

		// Get the target exercise out of the DB
		var chosenExercise = new Exercise("null");
		// var possibleExercises = [];
		console.log("entering DB Call")
		return (new ExerciseService(this.af)).getAllExercises(((possibleExercises) =>{
			console.log("inside the DB Call");
			var actuallyPossible = []
			for(var i=0; i<possibleExercises.length; i++){
				if(possibleExercises[i].type == type){
					actuallyPossible.push(possibleExercises[i]);
				}
			}
			console.log("found list", actuallyPossible.length, possibleExercises.length)

			var min = 0;
			var max = actuallyPossible.length - 1;
			var index = Math.floor(Math.random() * (max - min + 1)) + min;
			console.log("Here?");
			var chosenExercise = actuallyPossible[index];
			console.log("Here2?")
			var chosenExerciseKey = chosenExercise["$key"];
			console.log("ChosenExercise: ",chosenExercise);
			console.log("key: ",chosenExerciseKey);
			console.log("attempting to find Rating")
			var chosenRating = new ExerciseRating();
			for(var i=0; i<person.ratings.length; i++){
				console.log(person.ratings[i].targetExerciseKey);
				if(person.ratings[i].targetExerciseKey == chosenExerciseKey){
					chosenRating = person.ratings[i];
					console.log("SUCCESS");
				}
			}


			// Copy Json, modify based on user vars
			// TODO: reasonable scaling
			var assign = new Assignment(chosenExercise, 0);
			assign.exercise = chosenExercise;
			assign.time = chosenExercise.time;
			assign.repetitions = chosenExercise.repetitions;
			assign.sets = chosenExercise.sets;
			assign.weight = chosenExercise.weight * person.muscle + chosenRating.intensityScaling;
			assign.completed = false;
	        assign.feedback = 0;


			console.log(assign);
			return assign;
		}))
	}

	genAssignmentCB(type: string, cb){
		var person = (new ProfileService(this.af)).getCurrentUser();

		// Generate Random Exercise, with the given type
		// TODO: Oh god it's ugly dont look
		var gotType = '';
		// console.log("making an assignment ",type)

		// Get the target exercise out of the DB
		var chosenExercise = new Exercise("null");
		// var possibleExercises = [];
		// console.log("entering DB Call")
		(new ExerciseService(this.af)).getAllExercises((possibleExercises =>{
			// console.log("inside the DB Call", possibleExercises);
			var actuallyPossible = []
			for(var i=0; i<possibleExercises.length; i++){
				if(possibleExercises[i].type == type){
					actuallyPossible.push(possibleExercises[i]);
				}
			}
			// console.log("found list", actuallyPossible.length, possibleExercises.length)

			var min = 0;
			var max = actuallyPossible.length - 1;
			var index = Math.floor(Math.random() * (max - min + 1)) + min;
			// console.log("Here?");
			var chosenExercise = actuallyPossible[index];
			// console.log("Here2?", chosenExercise)
			var chosenExerciseKey = chosenExercise["$key"];
			// console.log("ChosenExercise: ",chosenExercise);
			// console.log("key: ",chosenExerciseKey);
			// console.log("attempting to find Rating")
			var chosenRating = new ExerciseRating();
			for(var i=0; i<person.ratings.length; i++){
				// console.log(person.ratings[i].targetExerciseKey);
				if(person.ratings[i].targetExerciseKey == chosenExerciseKey){
					chosenRating = person.ratings[i];
					// console.log("SUCCESS");
				}
			}


			// Copy Json, modify based on user vars
			// TODO: reasonable scaling
			var assign = new Assignment(chosenExercise, 0);
			assign.exercise = chosenExercise;
			assign.time = chosenExercise.time;
			assign.repetitions = chosenExercise.repetitions;
			assign.sets = chosenExercise.sets;
			assign.weight = chosenExercise.weight * person.muscle + chosenRating.intensityScaling;
			assign.completed = false;
	        assign.feedback = 0;


			console.log(assign);
			cb(assign);
		}))
	}




	shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	}

	genWorkout(callb){
		// Randomly choose a workout with that focus / Type
		// TODO: Algorithmically determine pattern of main focus

		(new ExerciseService(this.af)).getAllTypes(((val) =>{
			var focuses = val;
			var mainFocus = focuses[Math.floor(Math.random() * focuses.length)];

			var plan = [];

			this.genWorkoutHelper(focuses.length, focuses, plan, (()=>{
				this.genWorkoutHelper(3, [mainFocus], plan, (()=>{
					console.log("BEFORE SHUFFLING: ", plan)
					var shuffled = this.shuffle(plan);
					console.log("SHUFFLED: ",shuffled);
					callb(shuffled);

				}));
			}));
			// TODO: Maybe Improve shuffling for cardio at beginning/end
			
		}));
	}
	wow(){
		var stuff;
		this.genWorkout(((val)=>{stuff = val;}));
	}

	// Recursive function to deal with Synchronous Callbacks
	genWorkoutHelper(count: number, focuses, plan, cb){
		if(count > 0){
			var foc = focuses[Math.floor(Math.random() * focuses.length)];
			this.genAssignmentCB(foc["$value"], ((val)=>{
				plan.push(val);
				this.genWorkoutHelper(count-1, focuses, plan, cb) //count-1
			}));
		}
		else{
			cb();
		}
	}

	genWeekPlan(Person){
		// save plan for user
		// Generate and display cards (may be different order)
		return 2;
	}



}
