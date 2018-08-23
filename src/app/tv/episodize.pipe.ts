import { Pipe, PipeTransform } from '@angular/core';
import { Episode } from './tv.models';

@Pipe({
  name: 'episodize'
})
export class EpisodizePipe implements PipeTransform {
  private pad = val => val > 9 ? val.toString() : '0' + val;

  transform({number, season}: Episode): string {
    const [numberPadded, seasonPadded] = [number, season].map(this.pad);

    return `s${seasonPadded}e${numberPadded}`;
  }


}
