import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ShowDetailsParams} from '../../app-routing.module';
import {TvmazeService} from '../tvmaze.service';
import {ShowDetails} from '../tv.models';
import {interval} from 'rxjs';

@Component({
  selector: 'tm-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {
  show: ShowDetails;
  counter$ = interval(1000);

  constructor(private route: ActivatedRoute,
              private tv: TvmazeService) {
    this.show = route.snapshot.data.show;

    const {id} = this.route.snapshot.params as ShowDetailsParams; // destructering
    this.tv.getShow(id)
      .subscribe(show => this.show = show);
  }

  ngOnInit() {
  }

}
