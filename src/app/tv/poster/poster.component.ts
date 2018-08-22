import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Show} from '../tv.models';
import {get} from 'lodash';

@Component({
  selector: 'tm-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnChanges {
  @Input() show: Show;
  imageUrl: string;
  private readonly placeholder = 'https://fillmurray.com/g/200/300';

  constructor() {
  }

  ngOnChanges() {
    this.imageUrl = get(this.show, 'image.medium', this.placeholder);
  }
}
