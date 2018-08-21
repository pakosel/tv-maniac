import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import { PagesModule } from './pages/pages.module';
import { TvModule } from './tv/tv.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    TvModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
