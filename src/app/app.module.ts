import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/share.module';
import { HttpClientModule } from '@angular/common/http';
//
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { StatusBadgeComponent } from './components/badge/badge.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    StatusBadgeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
