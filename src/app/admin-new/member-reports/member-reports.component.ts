import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { ReportrequestService } from '../reportrequest.service';
import {Subject} from 'rxjs';
import { Inject } from '@angular/core';
import {enableProdMode} from '@angular/core';
import { Reportrequest } from '../reportrequestModel';
import { GenerateReportComponent } from '../generate-report/generate-report.component';

import { MembersService } from '../members.service';
import {Member} from '../membermodel'


@Component({
  selector: 'app-member-reports',
  templateUrl: './member-reports.component.html',
  styleUrls: ['./member-reports.component.css']
})


export class MemberReportsComponent implements OnInit {
  
memberid: number;
fname: string;
lname:string;
member:Member;
reportrequest: Reportrequest[];

displayedColumns = ['memberid']
dataSource = new MatTableDataSource();

@ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private membersservice:MembersService,  private reportrequestservice:ReportrequestService,public dialog:MatDialog) { }

  ngOnInit() {
     this.reportrequestservice.getReportrequest().subscribe((rest:Reportrequest[])=>{
           this.reportrequest=rest;
           console.log(this.reportrequest);
     }
      );
  }

  openDialog(id:Number) {
    console.log(id);
    this.membersservice.getMemberById(id).subscribe((data:Member)=>{
      this.member=data;
      console.log(this.member);
    })
    const dialogRef = this.dialog.open(GenerateReportComponent, {
      height:'600px',
      width: '800px',
      data: this.member
    });
    this.ngOnInit();
 
  }

  getMemberById(id){
    this.fname
   }
   
   myfunc(id:Number){
      console.log(id)
      this.membersservice.getMemberById(id).subscribe((data:Member)=>{
        this.member=data;
        console.log(this.member);
      })
      
   }
}
