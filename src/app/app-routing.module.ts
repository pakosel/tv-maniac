import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SearchComponent} from './tv/search/search.component';
import {ContactComponent} from './pages/contact/contact.component';
import {Page404Component} from './page/page404/page404.component';
import {ShowDetailsComponent} from './tv/show-details/show-details.component';
import {ShowDetailsResolver} from './tv/show-details/show-details.resolver';
import {LoggedInGuard} from './auth/logged-in.guard';

export interface ShowDetailsParams {
  id: string;
}
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tv', component: SearchComponent},
  {
    path: 'tv/:id', component: ShowDetailsComponent,
    resolve: {
      show: ShowDetailsResolver,
    },
    canActivate: [LoggedInGuard]
  },
  {path: 'contact', component: ContactComponent},
  {path: '**', component: Page404Component}
];

@NgModule({
  providers: [ShowDetailsResolver],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
