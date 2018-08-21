import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ShowResponse} from './tv.models';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TvmazeService {
  apiRoot = 'https://api.tvmaze.com';


  constructor(private http: HttpClient) {

  }

  searchShows(query: string) {
    const url = `${this.apiRoot}/search/shows?q=${query}`;
    this.http.get<ShowResponse[]>(url)
      .pipe(map((showsResponse) => showsResponse.map(showResponse => showResponse.show)))
      .subscribe(resp => console.table(resp));
  }
}
