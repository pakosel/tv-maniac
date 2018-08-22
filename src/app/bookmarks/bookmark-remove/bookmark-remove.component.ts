import {Component, Input, OnInit} from '@angular/core';
import {Show} from '../../tv/tv.models';
import {BookmarksService} from '../bookmarks.service';

@Component({
  selector: 'tm-bookmark-remove',
  templateUrl: './bookmark-remove.component.html',
  styleUrls: ['./bookmark-remove.component.scss']
})
export class BookmarkRemoveComponent implements OnInit {
  @Input() show: Show;

  constructor(private bs: BookmarksService<Show>) { }

  ngOnInit() {
  }

  removeBookmark(show: Show): void {
    this.bs.remove(show.id);
  }

  isNotBookmark(show: Show): boolean {
    return !this.bs.has(show.id);
  }
}
