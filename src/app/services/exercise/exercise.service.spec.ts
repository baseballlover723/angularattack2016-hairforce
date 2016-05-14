import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ExerciseService } from './exercise.service.ts';

describe('Exercise Service', () => {
  beforeEachProviders(() => [ExerciseService]);

  it('should ...',
      inject([ExerciseService], (service: ExerciseService) => {
    expect(service).toBeTruthy();
  }));
});
