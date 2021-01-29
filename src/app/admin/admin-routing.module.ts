import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateGuard } from '../core/can-activate.guard';

const routes: Routes = [
  {
    path: 'admin',
    canActivate: [CanActivateGuard],
    data: { admin: true },
    loadChildren: () => import('./admin.module').then(mod => mod.AdminModule),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }