import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyRoutingModule } from './apply-routing.module';
import { SharedModule } from '../../shared/share.module';
import { ApplyListComponent } from './apply-list/apply-list.component';
import { ApplyAddComponent } from './apply-add/apply-add.component';
import { ApplyViewComponent } from './apply-view/apply-view.component';
import { ApplyApproveComponent } from './apply-approve/apply-approve.component';
import { CustomComponentModule } from 'app/components/custom-component.module';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [ApplyListComponent, ApplyAddComponent, ApplyViewComponent, ApplyApproveComponent, LayoutComponent],
  imports: [CommonModule, ApplyRoutingModule, SharedModule, CustomComponentModule],
})
export class ApplyModule {}
