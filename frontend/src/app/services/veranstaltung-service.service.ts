import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Veranstaltung } from '../model/veranstaltung';
import { Kurs } from '../model/kurs';

@Injectable({
  providedIn: 'root'
})
export class VeranstaltungServiceService {

  constructor(private http: HttpClient) {

   }

   public async findAll() {
     return this.http.get<Veranstaltung[]>(`http://localhost:8080/api/veranstaltung/all`).toPromise();
   }

   public async findById(id: number)  {
    return this.http.get<Veranstaltung>(`http://localhost:8080/api/veranstaltung/${id}`).toPromise();
  }

   public save(veranstaltung: Veranstaltung) {
     return this.http.post<Veranstaltung>(`http://localhost:8080/api/veranstaltung/add`, veranstaltung)
   }

   public delete(id: number): void {
    this.http.delete(`http://localhost:8080/api/veranstaltung/delete/${id}`).subscribe();
  }

}
