import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserPartsModule } from '../shared/user-parts/user-parts.module';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { MatTableModule } from '@angular/material';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    SharedModule,
    AuthRoutingModule,
    UserPartsModule,
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
