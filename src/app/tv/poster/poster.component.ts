import {Component, Input, OnInit} from '@angular/core';
import {Show} from '../tv.models';

@Component({
  selector: 'tm-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit {
  @Input() show: Show;
  imageUrl: string;

  constructor() {
  }

  ngOnInit() {
    this.imageUrl = this.show.image.medium;
  }
}
