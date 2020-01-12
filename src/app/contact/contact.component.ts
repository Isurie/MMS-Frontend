import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{
contact;

  constructor(private contactService: ContactService) { }

  submit(contact){
    this.contactService.create(contact);
    alert("Sent successfully.")
    this.clear();

  }
  clear(){
    this.contact="";
  }

  }
 
 

