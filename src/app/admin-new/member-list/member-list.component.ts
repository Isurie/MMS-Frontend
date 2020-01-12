import { Component, OnInit } from '@angular/core';
import { MembersService } from '../members.service';
import { Member } from '../member';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  constructor(private membersService: MembersService) {}

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
  }

}
