import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import { PagesModule } from './pages/pages.module';
import { TvModule } from './tv/tv.module';
import { Page404Component } from './page/page404/page404.component';
import {configInitializer} from './config.initializer';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from './config.service';

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
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: configInitializer,
      deps: [HttpClient, ConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
