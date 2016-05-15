/**
 * An exercise is a singular exercise such as a hammer curl, etc...
 */

export class Exercise {

    name: string;
    videoUrl: string;
    description: string;
    equipment: string;
    instructions: string;
    substitutions: string[];
    intensity: number;
    repetitions: number;
    sets: number;
    time: number;
    weight: number;
    type: string;
    typeUrl: string;

  constructor(name: string) {
    this.name = name;
  }
}
