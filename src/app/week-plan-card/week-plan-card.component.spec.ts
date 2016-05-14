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
import { WeekPlanCardComponent } from './week-plan-card.component';

describe('Component: WeekPlanCard', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [WeekPlanCardComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([WeekPlanCardComponent],
      (component: WeekPlanCardComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(WeekPlanCardComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(WeekPlanCardComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-week-plan-card></app-week-plan-card>
  `,
  directives: [WeekPlanCardComponent]
})
class WeekPlanCardComponentTestController {
}

