import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MemberService } from '../member.service';
import { JoinEvents } from '../joinEvents';
import { Member } from '../member';
import { TokenStorageService } from '../../auth/token-storage.service';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  info: any;
username:string;

member2 = new Member();
  joinevents: JoinEvents=new JoinEvents();
  member: Member=new Member();

  displayedColumns = ['eventid', 'eventname', 'venue', 'date','button'];
  dataSource = new MatTableDataSource();
  members;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _memberService:MemberService,private token: TokenStorageService) {}

  ngOnInit(){

    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.username=this.info.username;
    
    this._memberService.getidbyusername(this.username)
     .subscribe(data => this.member2=data);

     
    this.joinevents.memberid=this.member2.id;

    return this._memberService.getEvents().subscribe(rest=>this.dataSource.data=rest);
  }

  createJoinEvent(row):void{
    this.joinevents.memberid=this.member2.id;
    this.joinevents.eventid=row['eventid'];
    console.log(this.joinevents);
    this._memberService.createJoinEvent(this.joinevents)
    .subscribe(data=>{
      alert('Joined to the Event');
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
}