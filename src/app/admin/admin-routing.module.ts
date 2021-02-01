import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserPartsModule } from '../shared/user-parts/user-parts.module';
import { AdminComponent } from './admin.component';


const routes: Routes = [
  {
    path: 'home',
    component: AdminComponent
  },
]

@NgModule({
  declarations: [AdminComponent],
  imports: [RouterModule.forChild(routes),
    SharedModule,
    MatTableModule,
    UserPartsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }