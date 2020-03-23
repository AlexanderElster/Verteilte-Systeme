import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private usersUrl: string;

  constructor(private http: HttpClient) { 
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/api/user/all');
  }
  
  public save(user: User) {
    return this.http.post<User>('http://localhost:8080/api/user/add', user);
  }

  public delete(id: number): void {
    this.http.delete(`http://localhost:8080/api/user/delete/${id}`).subscribe();
  }

  public update(user: User): void{
    this.http.post(`http://localhost:8080/api/user/update/${user.id}`, user).subscribe();
  }
}
