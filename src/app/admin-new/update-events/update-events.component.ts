import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { EventService } from '../event.service';


@Component({
  selector: 'app-update-events',
  templateUrl: './update-events.component.html',
  styleUrls: ['./update-events.component.css']
})
export class UpdateEventsComponent implements OnInit {
  event: any;
  constructor(private dialogRef: MatDialogRef<UpdateEventsComponent>, @Inject(MAT_DIALOG_DATA) data, private _eventservice: EventService) {
    this.event = data;


  }

  ngOnInit() {
  }
  onClickUpdate(eventid: number, event) {
    if (this.event.eventname != null &&
      this.event.venue != null &&
      this.event.date != null &&
      this.event.starttime != null &&
      this.event.endtime != null &&
      this.event.eventfee != null) {
      if (this.event.starttime < this.event.endtime) {

        this.updateEvent(eventid, event);
        if (confirm("Are you sure to update this event?")) {

          alert("Successfully Updated")
          this.clear();
        }
      }
      else {
        alert("Invalid Time Schedule")
        this.event.starttime = "";
        this.event.endtime = "";
      }
    }
    else {
      alert("Complete all details!")
    }
  }
  clear() {
    this.event.eventname = "";
    this.event.venue = "";
    this.event.date = "";
    this.event.starttime = "";
    this.event.endtime = "";
    this.event.eventfee = 0;
  }

  updateEvent(eventid: number, event) {
    this._eventservice.updateEvent(eventid, event)
      .subscribe(
        data => {
          this.ngOnInit();
        });

  }


}
