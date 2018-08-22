import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {ShowDetails} from '../tv.models';
import {TvmazeService} from '../tvmaze.service';
import {ShowDetailsParams} from '../../app-routing.module';
import {Injectable} from '@angular/core';

@Injectable()
export class ShowDetailsResolver implements Resolve<ShowDetails> {
  constructor(private tv: TvmazeService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<ShowDetails> {
    const {id} = route.params as ShowDetailsParams;
    return this.tv.getShow(id);
  }

}
