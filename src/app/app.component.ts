import { Component } from '@angular/core';

@Component({
  selector: 'tm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tv-maniac';

  handleClick(event: MouseEvent) {
    this.title = event.clientX + '';
    console.log(event);
    console.warn(event.clientX);
  }
}
