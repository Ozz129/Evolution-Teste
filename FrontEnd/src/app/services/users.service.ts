import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class UsersService {
  constructor(private http: HttpClient) {}

  login(user: any): Observable<any> {
    return this.http.post("http://localhost:8080/api/user/login", user);
  }
  register(user: any): Observable<any> {
    return this.http.post("http://localhost:8080/api/user/register_user", user);
  }
  getUser() {
    return this.http.get("https://reqres.in/api/users/2");
  }
}
