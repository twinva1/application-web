import { NgModule } from '@angular/core';

import { BadgeComponent } from './badge/badge.component';
import { ViewFormComponent } from './viewform/viewform.component';
import { LoadingComponent } from './loading/loading.component';

import { SharedModule } from 'app/shared/share.module';

@NgModule({
  imports: [SharedModule],
  exports: [BadgeComponent, ViewFormComponent, LoadingComponent],
  declarations: [BadgeComponent, ViewFormComponent, LoadingComponent],
})

export class CustomComponentModule {}
