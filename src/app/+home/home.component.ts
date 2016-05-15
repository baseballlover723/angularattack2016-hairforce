import{ Component, OnInit } from '@angular/core';
import {ProfileService} from "../services/profile/profile.service";
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  providers: [ProfileService]

})
export class HomeComponent implements OnInit {

  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit() {
  }
}
