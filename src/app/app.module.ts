import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import { PagesModule } from './pages/pages.module';
import { TvModule } from './tv/tv.module';
import { Page404Component } from './page/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page404Component,
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
