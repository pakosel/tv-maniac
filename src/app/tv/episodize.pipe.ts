import { Pipe, PipeTransform } from '@angular/core';
import { Episode } from './tv.models';

@Pipe({
  name: 'episodize'
})
export class EpisodizePipe implements PipeTransform {

  transform(value: Episode): string {
    const {number, season} = value;
    const pad = val => val > 9 ? val.toString() : '0' + val;

    return `S${pad(season)}E${pad(number)}`;
  }


}
