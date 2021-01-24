import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  exports: [
    ReactiveFormsModule,
    AppRoutingModule,
  ]
})
export class SharedModule { }
