import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyRoutingModule } from './apply-routing.module';
import { SharedModule } from '../../shared/share.module';
import { ApplyListComponent } from './apply-list/apply-list.component';
import { ApplyAddComponent } from './apply-add/apply-add.component';
import { ApplyViewComponent } from './apply-view/apply-view.component';
import { ViewFormComponent } from 'app/components/viewform/viewform.component';
import { ApplyApproveComponent } from './apply-approve/apply-approve.component';
@NgModule({
  declarations: [
    ApplyListComponent,
    ApplyAddComponent,
    ApplyViewComponent,
    ViewFormComponent,
    ApplyApproveComponent,
  ],
  imports: [CommonModule, ApplyRoutingModule, SharedModule],
})
export class ApplyModule {}
