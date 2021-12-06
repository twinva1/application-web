import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AccountService } from 'app/service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private accountService: AccountService, private router: Router) {}

  canActivate() {
    const userInfo = this.accountService.userInfo.getValue();
    if (userInfo) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
