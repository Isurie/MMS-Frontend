import { Component, OnInit, Inject } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ReportrequestService } from '../reportrequest.service';
import { Member} from '../membermodel';
import { MembersService} from '../members.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.css']
})
export class GenerateReportComponent implements OnInit {
  member: any;

  constructor(private _memberService:MembersService, private dialogRef:MatDialogRef<GenerateReportComponent>,@Inject(MAT_DIALOG_DATA) data,private router:Router) { 
    this.member=data;
  }
  ngOnInit() {
    
  }
  print(id:Number){
    this.router.navigate(['memberReports',id,'print']);
  }

  clear() {
    this.member.clear();
  }

 
}
