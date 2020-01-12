import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Member } from '../member';
import { MemberService } from '../member.service';
import { Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-updateprof',
  templateUrl: './updateprof.component.html',
  styleUrls: ['./updateprof.component.css']
})
export class UpdateprofComponent implements OnInit {
  id:number=1;
  member=new Member();
  
  constructor(private dialogRef: MatDialogRef<UpdateprofComponent>, @Inject(MAT_DIALOG_DATA) data,private MemberService: MemberService) { 
    this.member = data;
  }


  ngOnInit() {}

  onClickUpdate() {
    if (confirm("Update this profile??")) {
      this.updateMember(this.id, this.member);
      alert("Successfully Updated")
    }
  }

  updateMember(id:number, member) {
    this.MemberService.updateMember(id, member)
      .subscribe(
        data => {
          this.ngOnInit();
        });

  }
  

}
