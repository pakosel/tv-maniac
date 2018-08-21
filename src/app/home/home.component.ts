import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() owner = 'me';

  constructor() { }

  ngOnInit() {
  }

}
