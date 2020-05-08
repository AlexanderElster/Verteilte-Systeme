import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vorlesungstermin } from '../model/vorlesungstermin';

@Injectable({
  providedIn: 'root'
})
export class VorlesungsterminService {

  constructor(private http: HttpClient) { }

  public async findAll() {
    return this.http.get<Vorlesungstermin[]>('http://localhost:8080/api/vorlesungstermin/all').toPromise();
  }
  public async findById(id: number){
    return this.http.get<Vorlesungstermin>(`http://localhost:8080/api/vorlesungstermin/${id}`).toPromise();
  }
  public save(vorlesungstermin: Vorlesungstermin) {
    return this.http.post<Vorlesungstermin>('http://localhost:8080/api/vorlesungstermin/add', vorlesungstermin);
  }
  public async delete(id: number){
    this.http.delete(`http://localhost:8080/api/vorlesungstermin/delete/${id}`).toPromise();
  }
}
