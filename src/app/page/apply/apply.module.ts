import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyRoutingModule } from './apply-routing.module';
import { SharedMaterialModule } from '../../util/share-material.module';
import { ApplyComponent } from './apply.component';
import { ApplyAddComponent } from './apply-add/apply-add.component';
import { ApplyViewComponent } from './apply-view/apply-view.component';

@NgModule({
  declarations: [ApplyComponent, ApplyAddComponent, ApplyViewComponent],
  imports: [CommonModule, ApplyRoutingModule, SharedMaterialModule],
})
export class ApplyModule {}
