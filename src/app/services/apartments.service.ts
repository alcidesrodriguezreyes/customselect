import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

const URL_APARTMENTS = './app/apartments.json';

@Injectable()
export class ApartmentsService {

  constructor(private _http: Http) { }

  getApprtments (){
    return this._http.get(URL_APARTMENTS)
      .map((response: Response) => response.json())
      .catch(this._handleError);
  }

  _handleError(err: any){
    console.log(err);
    return Observable.throw(err);
  }
}
