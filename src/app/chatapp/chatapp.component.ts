import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { Auth1Service } from '../service/auth1.service';
import { DbService } from '../service/db.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chatapp.component.html',
  styleUrls: ['./chatapp.component.css']
})
export class ChatappComponent{
  user:any;
  name:string;
  message:string;
  messages:any;
  classes:string;
  ready:boolean;
  constructor(private auth:Auth1Service, private db:DbService) {
    this.ready = false;
    auth.user.subscribe((s)=>{
      this.user = s;
      if(this.user){
        this.messages = db.messages.valueChanges();

        db.messages.valueChanges().subscribe((s)=>{
          var div = document.getElementById('messageDiv');
          div.scrollTop = div.scrollHeight + 10000;
        });
        this.div_show();
      }else{
        this.ready = true;
      }

    });


   }


    div_show(){
      var that = this;
      setTimeout(function () {
        that.ready = true;
        var div = document.getElementById('messageDiv');
        div.scrollTop = div.scrollHeight + 10000;

      }, 2000);
    }


  change(){
    this.ready = true;
  }

  ngAfterViewInit(){
  }

  onSubmit(e){
    if(this.name != undefined){
      this.auth.login(this.name);
    }
  }

  onSubmitMessage(e){
    if(this.message != undefined){
      if(this.message.length > 0){

        this.db.pushData(this.user.uid,this.user.displayName,this.message);

        this.message = '';
      }
    }
  }
  public yourMessage(message){
    if(this.user.uid == message.uid){
      return true;
    }else{
      return false;
    }
  }

  public getName(uid){

  }

  logout(){
    this.auth.logout();
  }

}
