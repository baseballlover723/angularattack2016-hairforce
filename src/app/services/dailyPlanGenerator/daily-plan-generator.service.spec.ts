import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { DailyPlanGeneratorService } from './daily-plan-generator.service';

describe('DailyPlanGenerator Service', () => {
  beforeEachProviders(() => [DailyPlanGeneratorService]);

  it('should ...',
      inject([DailyPlanGeneratorService], (service: DailyPlanGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
