import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MembersService} from '../members.service';
import {Member} from '../membermodel'
@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {
id;
member:Member;
  constructor(private route:ActivatedRoute,private get:MembersService) { }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id');
    this.get.getMemberById(this.id).
    subscribe((data:Member)=>{
      this.member=data
    });
  }
  
  print(){
    window.print();
  }


}
