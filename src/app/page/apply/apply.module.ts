import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyRoutingModule } from './apply-routing.module';
import { SharedModule } from '../../shared/share.module';
import { ApplyComponent } from './apply.component';
import { ApplyAddComponent } from './apply-add/apply-add.component';
import { ApplyViewComponent } from './apply-view/apply-view.component';
import { ViewFormComponent } from 'app/components/viewform/viewform.component';
import { ApplyApproveComponent } from './apply-approve/apply-approve.component';
@NgModule({
  declarations: [
    ApplyComponent,
    ApplyAddComponent,
    ApplyViewComponent,
    ViewFormComponent,
    ApplyApproveComponent,
  ],
  imports: [
    CommonModule,
    ApplyRoutingModule,
    SharedModule,
  ],
})
export class ApplyModule {}
