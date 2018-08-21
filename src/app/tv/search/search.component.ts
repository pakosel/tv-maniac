import { Component, OnInit } from '@angular/core';
import {TvmazeService} from '../tvmaze.service';

@Component({
  selector: 'tm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(tv: TvmazeService) {
    tv.searchShows('flash');
  }

  ngOnInit() {
  }

}
