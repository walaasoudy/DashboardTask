import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) {

  }
  userlist():Observable<any>{
  return this.http.get("https://reqres.in/api/users?page={page}");
  }
  userdetails(id:any):Observable<any>{
    return this.http.get(`https://reqres.in/api/users/${id}`);
    }

}
