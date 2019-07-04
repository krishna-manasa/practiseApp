import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginContainerComponent } from './login-container/login-container.component';
import { LoginComponent } from './login-container/login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

export  const loginRoute: Routes = [{
  path: '',
  component: LoginContainerComponent
}]




@NgModule({
  declarations: [LoginContainerComponent, LoginComponent],
  imports: [
    CommonModule, RouterModule.forChild(loginRoute), FormsModule
  ],
  exports: [LoginComponent, LoginContainerComponent]
})

export class LoginModule { }
