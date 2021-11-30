import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//
import { LoginComponent } from './page/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'apply',
    loadChildren: () =>
      import('./page/apply/apply.module').then((m) => m.ApplyModule),
  },
  {
    path: 'approve',
    loadChildren: () =>
      import('./page/approve/approve.module').then((m) => m.ApproveModule),
  },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
