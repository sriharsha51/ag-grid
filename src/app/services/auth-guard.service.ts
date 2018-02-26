import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router} from '@angular/router'
import { LoginService } from './login.service';
import { DataService } from './data.service';

@Injectable()
export class AuthGuardService {

  constructor(private _loginService: LoginService, private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkLoggedIn(state.url); // checking whether the user is logged in to access the route.
  }

  checkLoggedIn(url: string): boolean {
    if(sessionStorage.JMSloggedIn==='true') { 
      return true;
    } else {
      this._loginService.redirectUrl = url;
      this._router.navigate(['/sign-in']); // redirecting the user if nthe user is not logged in.
      return false;
    }
  }
}
