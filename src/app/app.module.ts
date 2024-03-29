import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/share.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { AuthGuard } from './util/auth.guard';
import { AppRequestInteceptor, AppResponseInteceptor } from 'app/util/http-interceptor';
import { FakeBackendInteceptor } from './util/fake-backend';
import { UserComponent } from './page/user/user.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, UserComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AppRequestInteceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AppResponseInteceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: FakeBackendInteceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
