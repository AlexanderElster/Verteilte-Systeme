import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vorlesungstermin } from '../model/vorlesungstermin';

@Injectable({
  providedIn: 'root'
})
export class VorlesungsterminService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Vorlesungstermin[]> {
    return this.http.get<Vorlesungstermin[]>('http://localhost:8080/api/vorlesungstermin/all');
  }
}
