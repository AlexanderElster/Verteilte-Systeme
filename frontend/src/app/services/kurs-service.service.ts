import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Kurs } from '../model/kurs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class KursServiceService {

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Kurs[]> {
    return this.http.get<Kurs[]>(`http://localhost:8080/api/kurs/all`);
  }

  public save(kurs: Kurs) {
    return this.http.post<Kurs>(`http://localhost:8080/api/kurs/add`, kurs)
  }

  public delete(id: number): void {
    this.http.delete(`http://localhost:8080/api/kurs/delete/${id}`).subscribe();
  }

  public update(kurs: Kurs): void{
    this.http.post(`http://localhost:8080/api/kurs/delete/${kurs.id}`, kurs).subscribe();
  }
}
