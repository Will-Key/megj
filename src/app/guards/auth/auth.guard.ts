import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): boolean | Promise<boolean> {
    const user = JSON.parse(JSON.stringify(localStorage.getItem('user')))
    if (user) {
      return true
    } else {
      return this.router.navigate(['/login'])
    }
  }
}
