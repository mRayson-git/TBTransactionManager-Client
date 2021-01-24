import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';





@NgModule({
  declarations: [LoginComponent, RegisterComponent, AccountSettingsComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AccountModule { }
