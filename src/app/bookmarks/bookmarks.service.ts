import { Injectable } from '@angular/core';
import {Bookmark, BookmarkId} from './bookmarks.models';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ConfigService} from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService<T extends Bookmark> {
  items: T[] = [];
  // items: Array<Bookmark> = []; // equivalent definition
  // private readonly apiRoot = environment.bookmarksApiRoot;
  private apiRoot: string;

  constructor(private http: HttpClient, private config: ConfigService) {
    this.apiRoot = config.bookmarksApiRoot;
    this.http.get<T[]>(this.apiRoot)
      .subscribe(items => this.items = items);
  }

  getAll(): T[] {
    return [... this.items]; // array clone
  }

  add(item: T): void {
    this.http.post(this.apiRoot, item)
      .subscribe(() => this.items.push(item));
  }

  remove(id: BookmarkId): void {
    this.http.delete(`${this.apiRoot}/${id}`)
      .subscribe(() => this.items = this.items.filter(item => item.id !== id));
  }

  has(id: BookmarkId): boolean {
    return this.items.some(item => item.id === id);
  }
}
