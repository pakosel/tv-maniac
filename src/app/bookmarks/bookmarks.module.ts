import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkAddComponent } from './bookmark-add/bookmark-add.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BookmarkAddComponent],
  exports: [BookmarkAddComponent]
})
export class BookmarksModule { }
