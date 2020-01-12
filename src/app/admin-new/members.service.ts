import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from './member';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/jason' })
};

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  id: any;
  member: Member = new Member();

  private memberUrl = 'http://localhost:8080/api/auth/member';

  constructor(private http: HttpClient) { }



  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.memberUrl);
  }
  deleteMember(id: number): Observable<any> {
    return this.http.delete(`${this.memberUrl}/${id}`, { responseType: 'text' });
  }
  getMembersByFname(fname: String): Observable<any> {
    return this.http.get(`${this.memberUrl}/fname/${fname}`);
  }
  getMemberById(id: Number): Observable<any> {
    return this.http.get(`${this.memberUrl}/id/${id}`);

  }
}
