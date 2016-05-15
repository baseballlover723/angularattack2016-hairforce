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
import { UserInfoFormComponent } from './user-info-form.component';

describe('Component: UserInfoForm', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [UserInfoFormComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([UserInfoFormComponent],
      (component: UserInfoFormComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(UserInfoFormComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(UserInfoFormComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-user-info-form></app-user-info-form>
  `,
  directives: [UserInfoFormComponent]
})
class UserInfoFormComponentTestController {
}

