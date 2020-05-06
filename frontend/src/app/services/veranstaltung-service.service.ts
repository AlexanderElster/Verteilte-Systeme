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

   public findAll(): Observable<Veranstaltung[]> {
     return this.http.get<Veranstaltung[]>(`http://localhost:8080/api/veranstaltung/all`);
   }

   public save(veranstaltung: Veranstaltung) {
     return this.http.post<Veranstaltung>(`http://localhost:8080/api/veranstaltung/add`, veranstaltung)
   }

   public delete(id: number): void {
    this.http.delete(`http://localhost:8080/api/veranstaltung/delete/${id}`).subscribe();
  }

  public update(veranstaltung: Veranstaltung): void{
    this.http.post(`http://localhost:8080/api/veranstaltung/update/${veranstaltung.id}`, veranstaltung).subscribe();
  }
}
