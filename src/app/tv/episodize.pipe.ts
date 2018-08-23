import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'episodize'
})
export class EpisodizePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
