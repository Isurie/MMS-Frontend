import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Event } from "./event";
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()

export class EventService {
  eventid: any;
  event: Event = new Event();
  public date = new Date();


  private baseUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }

  public createEvent(event) {
    return this.http.post<Event>(this.baseUrl + "/eventcreation", event);
  }

  getEvents(): Observable<any> {
    return this.http.get(this.baseUrl + '/event');
  }

  deleteEvent(eventid: number): Observable<any> {
    return this.http.delete(`${this.baseUrl + '/deleteevent'}/${eventid}`, { responseType: 'text' });
  }

  updateEvent(eventid: number, event): Observable<any> {
    return this.http.put(`${this.baseUrl + '/updateevent'}/${eventid}`, event);
  }

  getEvent(eventname: String):Observable<any>{
    return this.http.get(`${this.baseUrl + '/eventdetails'}/eventname/${eventname}`);
  }
  getEventByDate(date: String):Observable<any>{
    return this.http.get(`${this.baseUrl + '/eventname'}/date/${date}`);
  }
}



