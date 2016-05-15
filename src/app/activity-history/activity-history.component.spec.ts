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
import { ActivityHistoryComponent } from './activity-history.component';

describe('Component: ActivityHistory', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ActivityHistoryComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ActivityHistoryComponent],
      (component: ActivityHistoryComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ActivityHistoryComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(ActivityHistoryComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-activity-history></app-activity-history>
  `,
  directives: [ActivityHistoryComponent]
})
class ActivityHistoryComponentTestController {
}

