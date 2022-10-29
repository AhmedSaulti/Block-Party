import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchFormComponent } from './search-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    SearchFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
  ],
  exports: [
    SearchFormComponent
  ]
})
export class SearchFormModule { }
