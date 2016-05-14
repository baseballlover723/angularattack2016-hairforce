import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SimilarExercisesComponent } from './similar-exercises.component';

describe('Component: SimilarExercises', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [SimilarExercisesComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([SimilarExercisesComponent],
      (component: SimilarExercisesComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(SimilarExercisesComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(SimilarExercisesComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-similar-exercises></app-similar-exercises>
  `,
  directives: [SimilarExercisesComponent]
})
class SimilarExercisesComponentTestController {
}

