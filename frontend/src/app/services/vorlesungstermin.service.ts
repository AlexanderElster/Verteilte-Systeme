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
  public findById(id: number){
    return this.http.get<Vorlesungstermin>(`http://localhost:8080/api/vorlesungstermin/${id}`)
  }
  public save(vorlesungstermin: Vorlesungstermin) {
    return this.http.post<Vorlesungstermin>('http://localhost:8080/api/vorlesungstermin/add', vorlesungstermin);
  }
  public update(vorlesungstermin: Vorlesungstermin): void{
    this.http.post(`http://localhost:8080/api/vorlesungstermin/update/${vorlesungstermin.id}`, vorlesungstermin).subscribe();
  }
  public delete(id: number): void{
    this.http.delete(`http://localhost:8080/api/vorlesungstermin/delete/${id}`).subscribe();
  }
}
