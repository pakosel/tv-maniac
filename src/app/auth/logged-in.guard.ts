import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  canActivate(next: ActivatedRouteSnapshot): boolean {
    const isLoggedIn = prompt('Are you logged in?') === 'yes';
    return isLoggedIn;
  }
}
