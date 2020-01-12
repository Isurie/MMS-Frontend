import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reportrequest } from './reportrequest';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/jason'})
};

@Injectable({
  providedIn: 'root'
})
export class ReportrequestService {

  report:Reportrequest = new Reportrequest();
  Reportrequest:any;

  private baseUrl = 'http://localhost:8080/api/reportrequest';

 constructor(private http:HttpClient) { }

  getReportrequest(): Observable<Reportrequest[]>{
    return this.http.get<Reportrequest[]>(this.baseUrl);
  }
}

