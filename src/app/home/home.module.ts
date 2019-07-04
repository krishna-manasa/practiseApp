import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContainerComponent } from './home-container/home-container.component';
import { HomeComponent } from './home-container/home/home.component';
import { PageOneComponent } from './page-one/page-one.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeDataServiceService} from './resolver/home-data-service.service';
import {HttpClientModule} from '@angular/common/http';
import {CanActivateService} from '../login/guards/can-activate.service';

export  const homeRoute: Routes = [
  {
    path: '',
    component: HomeContainerComponent,
    resolve: {
      data: HomeDataServiceService
    }, canActivate: [CanActivateService] }
];
@NgModule({
  declarations: [HomeContainerComponent, HomeComponent, PageOneComponent],
  imports: [
    CommonModule, RouterModule.forChild(homeRoute), HttpClientModule
  ], providers: [HomeDataServiceService, CanActivateService]
})


export class HomeModule { }
