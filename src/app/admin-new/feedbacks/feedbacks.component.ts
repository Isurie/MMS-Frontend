import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ShowFeedbackService } from '../shared/showfeedback.service';
import { Feedback } from '../feedback';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import 'firebase/auth'; 
import 'firebase/firestore';
import {enableProdMode} from '@angular/core';
import 'firebase/firestore';
import {storage} from 'firebase';


@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit  {

  displayedColumns = ['firstName', 'lastName', 'email','subject']
  dataSource = new MatTableDataSource();
feedbacks;

@ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  feedback: any[];
constructor(private showfeedbackService: ShowFeedbackService, db: AngularFireDatabase) {
  db.list("/feedback")
      .valueChanges()
      
}
feedbackArray :  Feedback[];

options = {
  fieldSeparator: ',',
  quoteStrings: '"',
  decimalseparator: '.',
  showLabels: true,
  headers: ['First Name', 'Last Name', 'Email Address', 'Feedback'],
  title: 'Report',
  useBom: true,
  removeNewLines: true,
  keys: ['firstName','lastName','email','subject']
};

  ngOnInit() {
    this.showfeedbackService.getFeedbacks().subscribe(actionArray => {
      this.feedbackArray = actionArray.map(item => {
        return {
          
          id :item.key,
          ...item.payload.val()
        } as Feedback;
      })
    });

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}

