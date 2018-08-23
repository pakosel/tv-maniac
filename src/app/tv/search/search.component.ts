import { Component, OnInit } from '@angular/core';
import {TvmazeService} from '../tvmaze.service';
import {Show} from '../tv.models';
import {BookmarksService} from '../../bookmarks/bookmarks.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {debounceTime, filter, map} from 'rxjs/operators';
import {startsWithLetterValidator} from '../../forms/start-with-letter.validator';

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
    const queryControl = this.fb.control(
      'flash',
      [Validators.required, Validators.minLength(2), startsWithLetterValidator]
    );
    this.searchForm = this.fb.group({
      query: queryControl
    });

    this.searchForm.valueChanges
      .pipe(
        debounceTime(1000),
        filter(() => this.searchForm.valid),
        map(v => v.query)) // equivalent: map({query} => query)
      .subscribe(this.search.bind(this));
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
