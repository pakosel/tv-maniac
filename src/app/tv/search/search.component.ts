import { Component, OnInit } from '@angular/core';
import {TvmazeService} from '../tvmaze.service';
import {Show} from '../tv.models';

@Component({
  selector: 'tm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  shows: Show[] = [];

  constructor(tv: TvmazeService) {
    tv.searchShows('flash')
      .subscribe(shows => this.shows = shows);
  }

  ngOnInit() {
  }

}
