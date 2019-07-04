import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HomeDataServiceService} from '../../resolver/home-data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _router:Router,private _homeDataServiceService:HomeDataServiceService) { }

  ngOnInit() {
  }

  logOut($event: MouseEvent) {
    this._homeDataServiceService.setData(undefined);
    this._router.navigateByUrl('');
  }
}
