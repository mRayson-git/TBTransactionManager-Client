import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';




@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  exports: [
    ReactiveFormsModule,
    AppRoutingModule,
  ]
})
export class SharedModule { }
