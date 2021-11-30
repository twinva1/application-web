import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  userStorageKey = 'malbekUser';
  userInfo = new BehaviorSubject(
    JSON.parse(localStorage.getItem(this.userStorageKey)!)
  );
  constructor() {}

  login() {
    console.log('userInfo', this.userInfo.getValue());
    // TODO: add login api
    localStorage.setItem(this.userStorageKey, '' + +new Date());
    return of([1]).pipe(delay(1200));
  }

  logout() {}
}
