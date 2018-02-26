import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IEvent, IJuror, IEmployee } from '../interfaces/interfaces';

@Injectable()
export class DataService {

  constructor(private _http:HttpClient) { }

  getJurors(): Observable<IJuror[]> {
    return this._http.get<IJuror[]>('assets/api/jurors/jurors.json'); // http request to access juror json data
  }

  getEvents(): Observable<IEvent[]> {
    return this._http.get<IEvent[]>('assets/api/events/events.json'); // http request to access events json data
  }

  getEmployees(): Observable<IEmployee[]> {
    return this._http.get<IEmployee[]>('assets/api/employees/employees.json'); // http request to access employees json data
  }

}