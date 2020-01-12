import { Component,OnInit } from '@angular/core';
import { MemberService } from './member.service';
import { Member } from './member';

@Component({
    selector: 'app-memberlist',
    templateUrl: './memberdetails.component.html',
    styleUrls: ['./memberdetails.component.css']
  })
  export class MemberdetailsComponent implements OnInit {
  member:Member= new Member();
    public members = [];

    constructor(private _MemberService: MemberService) { }
  
    ngOnInit() {
        this._MemberService.getMembers()
        .subscribe(data => this.members=data);
    }
  
  }
  