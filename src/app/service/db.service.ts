import { Injectable } from '@angular/core';
import { Auth1Service } from './auth1.service';

import {AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable()
export class DbService {
  user:any;
  messages: AngularFireList<any>;
  constructor(private auth: Auth1Service, private db: AngularFireDatabase) {
    auth.user.subscribe((s)=>{
      this.user = s;
    });
    this.messages = db.list('messages');
  }

  public pushData(uid,name,message){
    this.messages.push({"uid":uid,"name":name,"message":message});
}

}