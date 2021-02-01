import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CanActivateGuard} from './core/can-activate.guard';
import {CanActivateAdminGuard} from './core/can-activateAdmin.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule),
  },
  {
    path: 'dash',
    canActivate: [CanActivateGuard],
    data: { admin: true },
    loadChildren: () => import('./dash/dash.module').then(mod => mod.DashModule),
  },
  {
    path: 'admin',
    canActivate: [CanActivateAdminGuard],
    data: { admin: true },
    loadChildren: () => import('./admin/admin-routing.module').then(mod => mod.AdminRoutingModule),
  },
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
