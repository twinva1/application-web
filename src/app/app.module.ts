import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedMaterialModule } from './share-material.module';
//
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { ApplyComponent } from './page/apply/apply.component';
import { ApproveComponent } from './page/approve/approve.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ApplyComponent,
    ApproveComponent,
  ],
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
