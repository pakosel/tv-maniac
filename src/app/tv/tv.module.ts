import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [SearchComponent]
})
export class TvModule { }
