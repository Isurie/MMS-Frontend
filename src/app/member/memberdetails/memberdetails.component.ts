import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../member';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ReportRequest } from '../reportrequest';
import { AdminRequest } from '../adminrequest';
import { TokenStorageService } from '../../auth/token-storage.service';

@Component({
  selector: 'app-memberdetails',
  template: `
  
 <main-nav></main-nav>
<div class="md">
<mat-card-actions align="end">
<mat-card > Member Id      :   <strong>{{member2.id}}</strong> </mat-card>
<mat-card > Email          :   <strong>{{member2.email}}</strong> </mat-card>
<mat-card > First Name     :   {{member2.fname}} </mat-card>
<mat-card > Last Name      :   {{member2.lname}} </mat-card>
<mat-card > Date of birth  :   {{member2.birthday}} </mat-card>
<mat-card > Gender         :   {{member2.gender}} </mat-card>
<mat-card > Phone Number   :   {{member2.telephone}} </mat-card>
<mat-card > User Name      :   {{member2.username}} </mat-card>
</mat-card-actions>  

 
  <h2>Joined Events</h2>
  <app-joinedevents-table></app-joinedevents-table><br>
  <button mat-raised-button color="primary" type="button" class="btn btn-primary btn-block" (click)="requestreport()">Request membership report</button><br><br>
  
  </div>
  `,
  styleUrls: ['./memberdetails.component.css']
})
export class MemberdetailsComponent implements OnInit {
  adminrequest: AdminRequest = new AdminRequest();
  reportrequest: ReportRequest = new ReportRequest();
  member2 = new Member();
  submitted = false;
  message: string;
  userId: string;
  info: any;
  username: string;



  constructor(
    private _MemberService: MemberService,
    private route: ActivatedRoute,
    private location: Location,
    private token: TokenStorageService
  ) { }



  ngOnInit(): void {



    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.username = this.info.username;

    this._MemberService.getidbyusername(this.username)
      .subscribe(data => this.member2 = data);

  }

  requestreport() {
    var n = event.timeStamp;
    var time = new Date();

    this.reportrequest.memberid = this.member2.id;
    this.reportrequest.datetime = String(time);
    console.log(this.reportrequest);
    this._MemberService.reportrequest(this.reportrequest)
      .subscribe(data => {
        alert('report request sent');
      });
  }

  requestadmin() {
    var time = new Date();
    this.adminrequest.memberid = this.member2.id;
    this.adminrequest.datetime = String(time);
    this._MemberService.adminrequest(this.adminrequest)
      .subscribe(data => {
        alert('admin request sent');
      });
  }

}
