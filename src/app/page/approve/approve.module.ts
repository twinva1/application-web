import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApproveRoutingModule } from './approve-routing.module';
import { ApproveComponent } from './approve.component';
import { ApproveViewComponent } from './approve-view/approve-view.component';


@NgModule({
  declarations: [
    ApproveComponent,
    ApproveViewComponent
  ],
  imports: [
    CommonModule,
    ApproveRoutingModule
  ]
})
export class ApproveModule { }
