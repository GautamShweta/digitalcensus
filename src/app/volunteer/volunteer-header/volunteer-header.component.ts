import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volunteer-header',
  templateUrl: './volunteer-header.component.html',
  styleUrls: ['./volunteer-header.component.css']
})
export class VolunteerHeaderComponent  {

  constructor() { }

  onClick() {
    sessionStorage.clear();
  }

}
