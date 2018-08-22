import {Component, Input, OnInit} from '@angular/core';
import {BookmarksService} from '../bookmarks.service';
import {Show} from '../../tv/tv.models';

@Component({
  selector: 'tm-bookmark-add',
  templateUrl: './bookmark-add.component.html',
  styleUrls: ['./bookmark-add.component.scss']
})
export class BookmarkAddComponent implements OnInit {
  @Input() show: Show;

  constructor(private bs: BookmarksService<Show>) { }

  ngOnInit() {
  }

  saveBookmark(show: Show): void {
    this.bs.add(show);
  }

  isBookmark(show: Show): boolean {
    return this.bs.has(show.id);
  }
}
