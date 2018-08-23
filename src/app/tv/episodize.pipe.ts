import { Pipe, PipeTransform } from '@angular/core';
import { Episode } from './tv.models';

const pad = val => val > 9 ? val.toString() : '0' + val;

@Pipe({
  name: 'episodize'
})
export class EpisodizePipe implements PipeTransform {

  transform({number, season}: Episode): string {
    const [numberPadded, seasonPadded] = [number, season].map(pad);

    return `s${seasonPadded}e${numberPadded}`;
  }


}
