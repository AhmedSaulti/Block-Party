import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    TableModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
