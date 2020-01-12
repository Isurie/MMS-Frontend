import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Member} from '../member';
import { MemberListComponent } from "../member-list/member-list.component";
import { MembersService} from '../members.service';

import {Subject} from 'rxjs';
import { Inject } from '@angular/core';
import {enableProdMode} from '@angular/core';


@Component({
  selector: 'app-member-data-table',
  templateUrl: './member-data-table.component.html',
  styleUrls: ['./member-data-table.component.css']
})
export class MemberDataTableComponent implements OnInit {
  fname: String;
  members: Member[];
  member: Member=new Member();
 id:number;
  private _success = new Subject<string>();
  successMessage: string;
  messageType:string;

  displayedColumns = ['fname', 'lname', 'gender', 'email','telephone','id']
  dataSource = new MatTableDataSource();

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _memberService:MembersService, private listComponent: MemberListComponent
    
    ) {}


    options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      headers: ['First Name', 'Last Name','Gender', 'Email Address', 'Contact No.'],
      title: 'Report',
      useBom: true,
      removeNewLines: true,
      keys: ['fname','lname','gender','email','telephone']
    };
   
  ngOnInit(){
    return this._memberService.getMembers().subscribe(rest=>this.dataSource.data=rest);
    
  }

 

  onClickdelete(id: Number) {
    if(confirm("Are you sure to delete this member?")) {
      this.deleteMember(id);
      alert("Successfully deleted a member")
 }
  }

 deleteMember(id) {
    this._memberService.deleteMember(id)
      .subscribe(
        data => {
          if(data){
                  this.DeleteSuccessMessage();
                }
                else{
                  this.DeleteUnSuccessMessage();
                }
                
                this.ngOnInit();
              });
            }
            public DeleteSuccessMessage() {
                this.messageType="success";
                this._success.next(`Successfully Deleted.`);
              };
              public DeleteUnSuccessMessage() {
                this.messageType="danger";
                this._success.next(`Deletion is Unsuccessful.`);
              };
            

 ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  

}
  

