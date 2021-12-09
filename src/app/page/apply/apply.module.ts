import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//
import { ApplyRoutingModule } from './apply-routing.module';
import { SharedModule } from '../../shared/share.module';
import { ApplyListComponent } from './apply-list/apply-list.component';
import { ApplyAddComponent } from './apply-add/apply-add.component';
import { ApplyViewComponent } from './apply-view/apply-view.component';
import { ApplyApproveComponent } from './apply-approve/apply-approve.component';
import { ApplyLayoutComponent } from './apply-layout/layout.component';

@NgModule({
  declarations: [
    ApplyListComponent,
    ApplyAddComponent,
    ApplyViewComponent,
    ApplyApproveComponent,
    ApplyLayoutComponent,
  ],
  imports: [CommonModule, ApplyRoutingModule, SharedModule],
})
export class ApplyModule {}
