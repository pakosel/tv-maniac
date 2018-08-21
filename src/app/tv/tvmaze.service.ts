import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvmazeService {
  apiRoot = 'https://api.tvmaze.com';


  constructor(private http: HttpClient) {

  }

  searchShows(query: string) {
    const url = `${this.apiRoot}/search/shows?q=${query}`;
    this.http.get(url).subscribe(resp => console.table(resp));
  }
}
