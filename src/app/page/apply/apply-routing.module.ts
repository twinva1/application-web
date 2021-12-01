import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../../components/layout/layout.component';
import { ApplyAddComponent } from './apply-add/apply-add.component';
import { ApplyViewComponent } from './apply-view/apply-view.component';
import { ApplyComponent } from './apply.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: ApplyComponent },
      { path: 'add', component: ApplyAddComponent },
      { path: 'view', component: ApplyViewComponent },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplyRoutingModule {}
