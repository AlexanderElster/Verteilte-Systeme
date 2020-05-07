import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { LoginUser } from '../model/loginUser';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private usersUrl: string;

  constructor(private http: HttpClient) { 
  }

  public async findAll() {
    return this.http.get<User[]>('http://localhost:8080/api/user/all').toPromise();
  }

  public async findById(id: number)  {
    return this.http.get<User>(`http://localhost:8080/api/user/${id}`).toPromise();
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

  public async login(logUser : LoginUser) {
    return this.http.post<User>('http://localhost:8080/api/user/login', logUser).toPromise();
  }
}
