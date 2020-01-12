import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MemberService } from '../member.service';
import { Inject } from '@angular/core';
import { MatDialog ,MAT_DIALOG_DATA} from '@angular/material';
import { UpdateprofComponent } from '../updateprof/updateprof.component';
import { TokenStorageService } from '../../auth/token-storage.service';

@Component({
  selector: 'app-details',
  template: `
  <main-nav></main-nav>
  <div class="detail">
  <mat-card-actions align="end">
  <mat-card > Member Id      :   <strong>{{member2.id}}</strong> </mat-card>
  <mat-card > Email          :   <strong>{{member2.email}}</strong> </mat-card>
  <mat-card > First Name     :   {{member2.fname}} </mat-card>
  <mat-card > Last Name      :   {{member2.lname}} </mat-card>
  <mat-card > Date of birth  :   {{member2.birthday}} </mat-card>
  </mat-card-actions>
  <mat-card-actions align="end">
  <mat-card > Gender         :   {{member2.gender}} </mat-card>
  <mat-card > Phone Number   :   {{member2.telephone}} </mat-card>
  <mat-card > User Name      :   {{member2.username}} </mat-card>
  </mat-card-actions>
  </div><br>
  <button mat-raised-button color="primary" class="btn btn-success"   (click)="openDialog(member2)">UPDATE</button>
<br><br>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  member2 = new Member();
  info: any;
  username:string;
  
  constructor(private _MemberService: MemberService,public dialog: MatDialog,private token: TokenStorageService) { }

  ngOnInit() :void{

    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.username=this.info.username;
    this._MemberService.getidbyusername(this.username)
     .subscribe(data => this.member2=data);

  }

  

  openDialog(member2) {
    const dialogRef = this.dialog.open(UpdateprofComponent, {
       height:'720px',
      width: '750px',
      data: member2
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });

  }

}
