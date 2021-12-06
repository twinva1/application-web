import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Router } from '@angular/router';
//
import { UserType } from 'app/util/type';
import { UserRole } from 'app/util/constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  userStorageKey = 'malbekUser';
  userInfo = new BehaviorSubject<null | UserType>(
    JSON.parse(localStorage.getItem(this.userStorageKey)!)
  );
  isAdmin = false;

  constructor(private http: HttpClient, private router: Router) {
    if (this.userInfo.getValue()?.role_id === UserRole.Admin) {
      this.isAdmin = true;
    }
  }

  login(account: string, password: string) {
    // TODO: add login api
    // this.http.post<LoginResponse>('/user/login')
    const userInfo = {
      id: 1,
      name: account,
      role_id: password === '123' ? 1 : 0,
    };
    localStorage.setItem(this.userStorageKey, JSON.stringify(userInfo));
    if (userInfo.role_id === UserRole.Admin) {
      console.log(`${account} is admin`);
      this.isAdmin = true;
    }
    this.userInfo.next(userInfo);

    return of([1]).pipe(delay(1200));
  }

  logout() {
    this.userInfo.next(null);
    this.isAdmin = false;
    localStorage.removeItem(this.userStorageKey);
    this.router.navigate(['/login']);
  }
}
