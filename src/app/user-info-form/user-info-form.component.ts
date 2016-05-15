import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-user-info-form',
  templateUrl: 'user-info-form.component.html',
  styleUrls: ['user-info-form.component.css']
})
export class UserInfoFormComponent implements OnInit, AfterViewInit {

  ngAfterViewInit() {
    $("#user-info-modal").openModal();
  }
  constructor() {
  }


  ngOnInit() {
  }
}
