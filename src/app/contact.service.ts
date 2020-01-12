import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ContactService {

  constructor(private db: AngularFireDatabase) { }

  create(contact){
    return this.db.list('/contact').push(contact);
  }

}
