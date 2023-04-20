import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { State } from '../models/state';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  url = 'http://localhost:4002/states';

  constructor(private http: HttpClient) { }
 
  updateState(id: string, state: State): Observable<State> {
    return this.http.put<State>(this.url + '/' + id, state);
  }
  getTheStates(): Observable<State[]> {
    return this.http.get<State[]>(this.url+'/all');
  }
  
}

