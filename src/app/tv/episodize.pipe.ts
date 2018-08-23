import { Pipe, PipeTransform } from '@angular/core';
import { Episode } from './tv.models';

@Pipe({
  name: 'episodize'
})
export class EpisodizePipe implements PipeTransform {

  transform(value: Episode): string {
    const {number, season} = value;
    const numberPadded = number > 9 ? number.toString() : '0' + number;
    const seasonPadded = season > 9 ? season.toString() : '0' + season;

    return `S${seasonPadded}E${numberPadded}`;
  }

}
