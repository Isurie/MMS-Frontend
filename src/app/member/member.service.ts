import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from './member';
import { Observable } from 'rxjs';
import { IEvent } from './event';
import { HttpHeaders } from '@angular/common/http';
import { JoinEvents } from './joinEvents';
import { ReportRequest } from './reportrequest'
import { AdminRequest } from './adminrequest';
import { Rating } from './rating';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/jason'})
};

@Injectable()
  
export class MemberService{
  rating: Rating = new Rating();
  requestreport:ReportRequest= new ReportRequest();
  member:Member = new Member();
  joinevent: JoinEvents = new JoinEvents();
  public date = new Date();

  //private memberid: string = new Member().username;

  //private _url1 = 'http://localhost:8080/api';
  //private _url2: string = "/assets/data/events.json";
  //private _url3: string = "/assets/data/joinedEvents.json";
  
  private memberUrl = 'http://localhost:8080/api/auth/member';
  private updatememberurl = 'http://localhost:8080/api/auth/updatemember';
  private joineventurl = 'http://localhost:8080/api/joinevent';
  private adminrequesturl = 'http://localhost:8080/api/adminrequest';
  private reportrequesturl = 'http://localhost:8080/api/reportrequestcreate' ;
  private joinedeventsurl = 'http://localhost:8080/api/joinedevents';
  private getidbyusernameurl = 'http://localhost:8080/api/auth/userid';

  constructor(private http:HttpClient) { }
  
getMembers(): Observable<any>{
  return this.http.get('http://localhost:8080/api/auth/member');
}

getMember(id: number): Observable<Member>{
  const url = `${this.memberUrl}/${id}`;
  return this.http.get<Member>(url);
}

getidbyusername(username:string):Observable<any>{
  const url = `${this.getidbyusernameurl}/${username}`;
  return this.http.get<any>(url);
}

getJoinedEvents(id: number): Observable<any>{
  console.log();
  const url =`${this.joinedeventsurl}/${id}`;
  return this.http.get<any>(url);
}

getEvents(): Observable<any>{
  return this.http.get('http://localhost:8080/api/event');
}

updateMember(id: number,member):Observable<any>{
  const url = `${this.updatememberurl}/${id}`;
  return this.http.put(url,member);
}

public createJoinEvent(joinevent){
  console.log(joinevent);
  return this.http.post<JoinEvents>(this.joineventurl,joinevent);

}

public reportrequest(requestreport){
 return this.http.post<ReportRequest>(this.reportrequesturl,requestreport);
}

public adminrequest(adminrequest){
  return this.http.post<AdminRequest>(this.adminrequesturl,adminrequest);
}

}