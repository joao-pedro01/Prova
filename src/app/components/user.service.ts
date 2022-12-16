import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API = "https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) { }

  listar(): Observable<User[]> {
    return this.http.get<User[]>(this.API);
  }
}
