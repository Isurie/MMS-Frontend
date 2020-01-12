import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { EventService } from '../event.service';
import { from } from 'rxjs';
import { Observable } from 'rxjs';
import { Event } from '../event'


@Component({
  selector: 'event-history',
  templateUrl: './event-history.component.html',
  styleUrls: ['./event-history.component.css']
})
export class EventHistoryComponent implements OnInit {

  eventname: String;
  event: Event[];


  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.reloadData();
  }


  reloadData() { }


}