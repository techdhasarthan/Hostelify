import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hostel-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  email = "dmsiva3@gmail.com";
  userName = "sivaharis";
  
  constructor() { }

  ngOnInit(): void {
  }

}
