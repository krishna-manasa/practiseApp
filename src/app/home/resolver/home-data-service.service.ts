import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable(
)
export class HomeDataServiceService implements Resolve<any> {
 private JsonData: any;

  constructor(private _http: HttpClient) { }

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
  return new Promise((resolve, reject) => {
    if (this.JsonData) {
      resolve(true);
    }


    this._http.get('http://dummy.restapiexample.com/api/v1/employees').subscribe(res => {
      this.JsonData = res;
      setTimeout(() => {
        resolve(true);
      }, 9000);

    }, error1 => {
      reject(false);
    });
  });


  }

getData(): any {
    return this.JsonData;
}

  setData(s:any) {
    this.JsonData=s;
  }
}
