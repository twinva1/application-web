import { Component, OnDestroy, OnInit } from '@angular/core';
//
import { AccountService } from 'app/service';
import { fromEvent, throttleTime } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  userInfo = this.accountService.userInfo.getValue();
  isSmallDevice = window.matchMedia('(max-width: 900px)').matches;
  drawerOpened = !window.matchMedia('(max-width: 900px)').matches;

  fakePages = Array.from({ length: 5 });

  constructor(private accountService: AccountService) {
    fromEvent(window, 'resize')
      .pipe(throttleTime(200))
      .subscribe(() => {
        this.deviceDetect();
      });
  }

  ngOnInit(): void {
    //   window.addEventListener('resize', this.deviceDetect.bind(this));
  }

  ngOnDestroy() {
    //   window.removeEventListener('resize', this.deviceDetect.bind(this));
  }

  deviceDetect() {
    const smallDevice = window.matchMedia('(max-width: 900px)');
    if (smallDevice.matches) {
      this.drawerOpened = false;
    }
    this.isSmallDevice = smallDevice.matches;
  }

  handleLogout() {
    this.accountService.logout();
  }
}
