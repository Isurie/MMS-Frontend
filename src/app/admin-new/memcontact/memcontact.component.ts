import { Component, OnInit } from '@angular/core';
import { MemcontactService } from '../memcontact.service';
import { Memcontact } from '../memcontact';
import { Member } from '../member';
import { AngularFireDatabase } from "angularfire2/database";
import * as firebase from 'firebase';
import 'firebase/auth'; 
import 'firebase/firestore';
import {enableProdMode} from '@angular/core';
import 'firebase/firestore';
import {storage} from 'firebase';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import * as emailjs  from '../../../assets/js/email.min';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-memcontact',
  templateUrl: './memcontact.component.html',
  styleUrls: ['./memcontact.component.css']
})
export class MemcontactComponent implements OnInit {
  [x: string]: any;
  memcontact: any[];
  fname;
  email;
constructor(private MemcontactService: MemcontactService,db: AngularFireDatabase) {

  db.list("/contact")
  .valueChanges()
}
memcontactArray :  Memcontact[];
member=this.member;
  ngOnInit() {
    //email
    emailjs.init("user_iMgtekOphvMB1oGDxfAzd");

    this.MemcontactService.getMemcontact().subscribe(actionArray => {
      this.memcontactArray = actionArray.map(item => {
        return {
          id :item.key,
          ...item.payload.val()
        } as Memcontact;
      
      })
      console.log(this.memcontactArray[0].email);
    });

  }

  onSubmit(formdata:NgForm,email:String){
     console.log(formdata.value.description,email);
    var template_params = {
      "to_name": this.email,
      "reply_to": this.email,
      "from_name": "SM House",
      "message_html": formdata.value.description
      
   }
   
   var service_id = "default_service";
   var template_id = "template_z4FD95AI";
   emailjs.send(service_id, template_id, template_params);

   alert("Email sent successfully")
   this.clear();
  }
  myfunc(email:String){
    this.email=email;
    
  }
  clear(){
    this.email="";
  }

  
}