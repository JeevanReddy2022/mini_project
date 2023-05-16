import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }
  public httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Authorization':'authkey'
    })
  }

  // GetUser(){
  //   return this.httpClient.get('http://localhost:8080/LoginProject/api/v1/admin');
  // }

//   private baseURL = "http://localhost:8080/LoginProject/api/v1/admin";

//   getAllUserList(): Observable<User[]>{
//     return this.httpClient.get<User[]>(`${this.baseURL}`);
// }

// createUser(user: User): Observable<Object>{
//   return this.httpClient.post(`${this.baseURL}`, user);
// }


//Register

GetRegister(){
  return this.httpClient.get('http://localhost:8080/SignInProject/api/v1/register');
}

private registerURL = "http://localhost:8080/SignInProject/api/v1/register";

getAllRegisterList(email): Observable<User[]>{
  // public url = this.registerURL+/"/"+email;
  return this.httpClient.get<User[]>(`${this.registerURL+"/email/"+email}`,this.httpOptions);
}

createRegiter(user: User): Observable<Object>{
  return this.httpClient.post(`${this.registerURL}`, user);
}

}

