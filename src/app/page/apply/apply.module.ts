import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyRoutingModule } from './apply-routing.module';
import { SharedModule } from '../../shared/share.module';
import { ApplyListComponent } from './apply-list/apply-list.component';
import { ApplyAddComponent } from './apply-add/apply-add.component';
import { ApplyViewComponent } from './apply-view/apply-view.component';
import { ViewFormComponent } from 'app/components/viewform/viewform.component';
import { ApplyApproveComponent } from './apply-approve/apply-approve.component';
import { BadgeComponent } from 'app/components/badge/badge.component';
@NgModule({
  declarations: [
    ApplyListComponent,
    ApplyAddComponent,
    ApplyViewComponent,
    ViewFormComponent,
    ApplyApproveComponent,
    BadgeComponent,
  ],
  imports: [CommonModule, ApplyRoutingModule, SharedModule],
})
export class ApplyModule {}
