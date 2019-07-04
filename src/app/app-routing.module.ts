import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginContainerComponent} from './login/login-container/login-container.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },{
  path:'login',
    loadChildren:   'src/app/login/login.module#LoginModule'
  },{
  path:'home',
    loadChildren: 'src/app/home/home.module#HomeModule',
    pathMatch:'full'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
