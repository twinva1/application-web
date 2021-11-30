import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedMaterialModule } from './util/share-material.module';
//
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, LayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
