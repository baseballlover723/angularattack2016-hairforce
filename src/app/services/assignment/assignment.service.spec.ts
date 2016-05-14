import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { AssignmentService } from './assignment.service.ts';

describe('Assignment Service', () => {
  beforeEachProviders(() => [AssignmentService]);

  it('should ...',
      inject([AssignmentService], (service: AssignmentService) => {
    expect(service).toBeTruthy();
  }));
});
