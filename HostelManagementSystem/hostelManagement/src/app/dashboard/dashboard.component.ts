import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hostel-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'UCER Hostel';

  constructor() { }

  ngOnInit(): void {
  }

}
