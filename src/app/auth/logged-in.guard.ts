import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot): boolean {
    const isLoggedIn = prompt('Are you logged in?') === 'yes';

    const { roles } = next.data;
    const hasRoles = prompt('roles') === roles.join(',');

    if(!isLoggedIn || !hasRoles) {
      this.router.navigateByUrl('');
    }

    return isLoggedIn;
  }
}
