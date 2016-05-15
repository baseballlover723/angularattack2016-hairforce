import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Exercise} from "../../models/exercise";
import {ExerciseRating} from "../../models/exerciserating";
import {Assignment} from "../../models/assignment";
import {Profile} from "../../models/profile";


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

	// To be run whenever a new workout is created
	// function addWorkoutToAll(Workout blah){
	// 	for person in people
	// 		person genUserWorkout()
	// }


	// To be run for all users, whenever a new card
	// has been created and added to the DB
	// function genUserRating(){
	// 	person.experience
	// 	person.gender
	// 	person.muscle
	// 	person.goal

	// 	person.current append 
	// }

	// TODO: Refine numbers for scaling purposes
	genAssignment(person: Profile, type: string){
		// Select random one
		// From Exercises
		// Where Type = type
		Math.floor(Math.random() * (max - min + 1)) + min;
		chosenExercise = ex;
		chosenRating = person.getRating(chosenExercise);
		// Copy Json, modify based on user vars
		var assign: Assignment();
		assign.exercise = chosenExercise
		assign.time = chosenExercise.time
		assign.repetitions = chosenExercise.repetitions * 
		assign.sets = chosenExercise.sets;
		assign.weight = chosenExercise.weight * person.muscle;

		return assign;
		// return 1;
	}

	// function genDayPlan(Person){
	// 	// Randomly choose a workout with that focus / Type
	// 	focuses = []
	// 	AllFocuses = GET TYPES FROM DATABASE
	// 	mainFocus = random.select(AllFocuses)
	// 	others = 
	// 	//
	// 	plan = []
	// 	for focus in focuses{
	// 		plan.append(getWorkout(Person, focus))
	// 	}

	// }

	genWeekPlan(Person){

		

		// save plan for user

		// Generate and display cards (may be different order)
		return 2;
	}



}
