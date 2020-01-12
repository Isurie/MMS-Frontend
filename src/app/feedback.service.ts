import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class FeedbackService {

  constructor(private db: AngularFireDatabase) { }

  create(sfeedback){
    return this.db.list('/feedback').push(sfeedback);
  }       
}
