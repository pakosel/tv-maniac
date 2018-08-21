import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import {HttpClientModule} from '@angular/common/http';
import { PosterComponent } from './poster/poster.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [SearchComponent, PosterComponent]
})
export class TvModule { }
