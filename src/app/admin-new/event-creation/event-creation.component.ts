import { Component, OnInit } from "@angular/core";
import { EventService } from "../event.service";
import { FormControl } from "@angular/forms";
import { Event } from "../event";
import * as moment from 'moment';
import { from } from "rxjs";
import * as emailjs from '../../../assets/js/email.min'
import { NgForm } from '@angular/forms'
import { MembersService } from '../members.service';
import { Subject } from 'rxjs';
import { Inject } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Member } from '../membermodel'
@Component({
  selector: "app-event-creation",
  templateUrl: "./event-creation.component.html",
  styleUrls: ["./event-creation.component.css"]
})

export class EventCreationComponent implements OnInit {
  date: String;
  email;
  events: Event[];
  minDate = moment(new Date()).format('YYYY-MM-DD')
  dataSource = new MatTableDataSource();
  event: Event = new Event();
  members: Member[];
  constructor(private eventService: EventService, private _memberService: MembersService) {
  }

  ngOnInit() {
    emailjs.init("user_iMgtekOphvMB1oGDxfAzd");
    this._memberService.getMembers().subscribe((data: Member[]) => {
      this.members = data;
      console.log(this.members[0]);
    }
    )

  }
  onSubmit() {
    if (this.event.eventname != null &&
      this.event.venue != null &&
      this.event.date != null &&
      this.event.starttime != null &&
      this.event.endtime != null &&
      this.event.eventfee != null) {
      if (this.event.starttime < this.event.endtime) {
        this.eventService.createEvent(this.event).subscribe(data => {
          for (var i = 0; i < this.members.length; i++) {
            var template_params = {
              "to_name": this.members[i].fname + " " + this.members[i].lname,
              "reply_to": this.members[i].email,
              "from_name": "SM House",
              "message_html": "New event, " + this.event.eventname + " will be held on " + this.event.date + " at " + this.event.starttime

            }

            var service_id = "default_service";
            var template_id = "events";
            emailjs.send(service_id, template_id, template_params);

          }
          alert("Event created successfully.");
          this.clear();
        })
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
  ondateSubmit(date: String) {
    this.searchEvent(date);
  }
  searchEvent(date) {
    this.eventService.getEventByDate(date)
      .subscribe(events => this.events = events);
  }

  onSubmitEmail(formdata: NgForm, email: String) {
    console.log(formdata.value.description, email);
    var template_params = {
      "to_name": this.email,
      "reply_to": this.email,
      "from_name": "SM House",
      "message_html": formdata.value.description

    }

    var service_id = "default_service";
    var template_id = "events";
    emailjs.send(service_id, template_id, template_params);

    alert("Email sent successfully")
  }
  myfunc(email: String) {
    this.email = email;

  }

}






