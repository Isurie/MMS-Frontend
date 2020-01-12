import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class MemcontactService {

  constructor(private firebase: AngularFireDatabase, private firestore: AngularFirestore) { }
  memcontact: AngularFireList<any>;

  getMemcontact() {
    return this.firebase.list('contact').snapshotChanges();
  }
  insertMemcotact(memcontact) {
    this.memcontact.push({
      name: memcontact.name,
      subject: memcontact.subject,
      message: memcontact.message,
    });
  }
}
