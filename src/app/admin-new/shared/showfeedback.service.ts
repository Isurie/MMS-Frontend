import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: "root"
})
export class ShowFeedbackService {
  constructor(private firebase: AngularFireDatabase, private firestore: AngularFirestore) {}
  feedbacks: AngularFireList<any>;

  getFeedbacks() {
    return this.firebase.list('feedback').snapshotChanges();
  }
  
  insertFeedback(feedback) {
    this.feedbacks.push({
      FirstName: feedback.firstName,
      LastName: feedback.lastName,
      Country: feedback.country,
      Email: feedback.email,
      subject: feedback.subject
    });
  }
}
