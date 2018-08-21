import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import {HttpClientModule} from '@angular/common/http';
import { PosterComponent } from './poster/poster.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [SearchComponent, PosterComponent]
})
export class TvModule { }
