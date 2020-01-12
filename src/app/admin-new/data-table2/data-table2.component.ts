import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { EventService } from '../event.service';
import { Event } from '../event';
import { EventHistoryComponent } from "../event-history/event-history.component";
import { Subject } from "rxjs";
import { Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { UpdateEventsComponent } from '../update-events/update-events.component';
import { database } from 'firebase';
@Component({
  selector: 'data-table2',
  templateUrl: './data-table2.component.html',
  styleUrls: ['./data-table2.component.css'],
})
export class DataTable2Component implements OnInit {
  event: Event = new Event();

  private _success = new Subject<string>();
  successMessage: string;
  messageType: string;

  displayedColumns = ['eventname', 'venue', 'date', 'starttime', 'endtime', 'eventfee', 'eventid', 'button2'];
  dataSource = new MatTableDataSource();
  events;

  applyFilter(filterValue: string) {

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _eventService: EventService, private _eventHistoyComponent: EventHistoryComponent, public dialog: MatDialog) { }

  ngOnInit() {
    return this._eventService.getEvents().subscribe(rest => this.dataSource.data = rest);
  }


  onClickdelete(eventid: Number) {
    if (confirm("Are you sure to delete this event?")) {
      this.deleteEvent(eventid);
      alert("Successfully Deleted")
    }
  }

  deleteEvent(eventid) {
    this._eventService.deleteEvent(eventid)
      .subscribe(
        data => {
          this.ngOnInit();
        });

  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  openDialog(event) {
    const dialogRef = this.dialog.open(UpdateEventsComponent, {
      height:'600px',
      width: '800px',
      data: event
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });

  }

}
