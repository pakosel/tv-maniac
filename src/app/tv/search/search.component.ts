import { Component, OnInit } from '@angular/core';
import {TvmazeService} from '../tvmaze.service';
import {Show} from '../tv.models';
import {BookmarksService} from '../../bookmarks/bookmarks.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {map} from 'rxjs/operators';

@Component({
  selector: 'tm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  shows: Show[] = [];
  searchForm: FormGroup;

  constructor(private tv: TvmazeService,
              private bs: BookmarksService<Show>,
              private fb: FormBuilder) {
    const queryControl = this.fb.control('flash');
    this.searchForm = this.fb.group({
      query: queryControl
    });

    this.searchForm.valueChanges
      .subscribe(query => this.search(query.query));
  }

  search(query: string): void {
    this.tv.searchShows(query)
      .subscribe(shows => this.shows = shows);
  }

  ngOnInit() {
  }

  get allBookmarks(): Show[] {
    return this.bs.getAll();
  }
}
