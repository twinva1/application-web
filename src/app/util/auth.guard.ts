import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AccountService } from 'app/service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private accountService: AccountService, private router: Router, private snackbar: MatSnackBar) {}

  canActivate() {
    const userInfo = this.accountService.userInfo.getValue();
    if (userInfo) {
      return true;
    }
    this.snackbar.open('Please login!');
    this.router.navigate(['/login']);
    return false;
  }
}
