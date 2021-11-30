import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApproveViewComponent } from './approve-view/approve-view.component';
import { ApproveComponent } from './approve.component';

const routes: Routes = [
  { path: '', component: ApproveComponent },
  { path: 'view', component: ApproveViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApproveRoutingModule {}
