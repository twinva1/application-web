import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

//
import { AccountService } from 'app/service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  userInfo = this.accountService.userInfo.getValue();
  isSmallDevice = window.matchMedia('(max-width: 900px)').matches;
  drawerOpened = true;

  fakePages = Array.from({ length: 5 });

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    // window.addEventListener('resize', this.deviceDetect);
  }

  ngOnDestroy() {
    // window.removeEventListener('resize', this.deviceDetect);
  }

  deviceDetect() {
    const smallDevice = window.matchMedia('(max-width: 900px)');
    console.log('smallDevice', smallDevice.matches);
    this.isSmallDevice = smallDevice.matches;
  }

  handleLogout() {
    this.accountService.logout();
  }
}
