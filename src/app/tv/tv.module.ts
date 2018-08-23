import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import {HttpClientModule} from '@angular/common/http';
import { PosterComponent } from './poster/poster.component';
import {FormsModule} from '@angular/forms';
import { BookmarksModule } from '../bookmarks/bookmarks.module';
import { ShowDetailsComponent } from './show-details/show-details.component';
import {RouterModule} from '@angular/router';
import { EpisodizePipe } from './episodize.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    BookmarksModule,
    RouterModule
  ],
  declarations: [SearchComponent, PosterComponent, ShowDetailsComponent, EpisodizePipe]
})
export class TvModule { }
