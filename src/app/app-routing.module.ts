import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//
import { LoginComponent } from './page/login/login.component';
import { UserComponent } from './page/user/user.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { AuthGuard } from './util/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },      
      {
        path: 'apply',
        loadChildren: () => import('./page/apply/apply.module').then((m) => m.ApplyModule),
        canActivate: [AuthGuard],
      },
      { path: 'user', component: UserComponent },
    ],
  },
  { path: '**', redirectTo: 'apply' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
