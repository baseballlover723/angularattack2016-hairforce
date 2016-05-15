import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { WorkoutService } from './workout.service.ts';

describe('Workout Service', () => {
  beforeEachProviders(() => [WorkoutService]);

  it('should ...',
      inject([WorkoutService], (service: WorkoutService) => {
    expect(service).toBeTruthy();
  }));
});
