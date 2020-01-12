import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { SignUpInfo } from '../auth/signup-info';
// import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:8080/api/test/user';
  private pmUrl = 'http://localhost:8080/api/test/pm';
  private adminUrl = 'http://localhost:8080/api/test/admin';
  // private myUserUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }

  getPMBoard(): Observable<string> {
    return this.http.get(this.pmUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }

  // getByUsername(username: string): Observable<SignUpInfo>{
  //   const myUserUrl=`${this.myUserUrl}/${username}`;
  //   return this.http.get<SignUpInfo>(myUserUrl);
  // }
}
