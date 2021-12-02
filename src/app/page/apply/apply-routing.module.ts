import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../../components/layout/layout.component';
import { ApplyAddComponent } from './apply-add/apply-add.component';
import { ApplyViewComponent } from './apply-view/apply-view.component';
import { ApplyApproveComponent } from './apply-approve/apply-approve.component';
import { ApplyListComponent } from './apply-list/apply-list.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: ApplyListComponent },
      { path: 'add', component: ApplyAddComponent },
      { path: 'view/:id', component: ApplyViewComponent },
      { path: 'approve/:id', component: ApplyApproveComponent },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplyRoutingModule {}
