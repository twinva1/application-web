import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyAddComponent } from './apply-add/apply-add.component';
import { ApplyComponent } from './apply.component';

const routes: Routes = [
  { path: '', component: ApplyComponent },
  { path: 'add', component: ApplyAddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplyRoutingModule {}
