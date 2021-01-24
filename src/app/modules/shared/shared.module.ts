import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [ MessageComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  exports: [
    ReactiveFormsModule,
    AppRoutingModule,
    MessageComponent,
  ]
})
export class SharedModule { }
