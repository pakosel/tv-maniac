import { Component, OnInit } from '@angular/core';
import {TvmazeService} from '../tvmaze.service';
import {Show} from '../tv.models';
import {BookmarksService} from '../../bookmarks/bookmarks.service';

@Component({
  selector: 'tm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  shows: Show[] = [];
  query = 'flash';

  constructor(private tv: TvmazeService,
              private bs: BookmarksService<Show>) {
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

  saveBookmark(show: Show): void {
    this.bs.add(show);
  }

  isBookmark(show: Show): boolean {
    return this.bs.has(show.id);
  }
}
