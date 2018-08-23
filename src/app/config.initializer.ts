import {HttpClient} from '@angular/common/http';
import {ConfigService} from './config.service';
import {tap} from 'rxjs/operators';

export function configInitializer(http: HttpClient, config: ConfigService) {
  return () => http.get<{bookmarksApiRoot: string}>('/config.json')
    .pipe(
      tap(data => config.bookmarksApiRoot = data.bookmarksApiRoot)
    )
    .toPromise();
}
