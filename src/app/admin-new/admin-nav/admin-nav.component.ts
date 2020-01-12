import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Component, OnInit } from "@angular/core";
import { FormArray } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireObject, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';

import {storage} from 'firebase';


@Component({
  selector: "admin-nav",
  templateUrl: "./admin-nav.component.html",
  styleUrls: ["./admin-nav.component.css"]
})
export class AdminNavComponent implements OnInit {
  
  selectedFile=null;
  id = "0002";
  name = "Suhadini Kaluarachchi";
  url="http://rakcollege.agiuae.com/wp-content/uploads/2015/07/gent-300x300.png";

 constructor() {
  }
  ngOnInit() {
    var config = {
      apiKey: "AIzaSyCniqbncnqcT_NUn8mJo54VA-6VDhdo7Sg",
      authDomain: "image-uploads-e5677.firebaseapp.com",
      databaseURL: "https://image-uploads-e5677.firebaseio.com",
      projectId: "image-uploads-e5677",
      storageBucket: "image-uploads-e5677.appspot.com",
      messagingSenderId: "323881328976"
    };

    firebase.initializeApp(config);
    
    var storageRef=storage().ref(this.id);
    storageRef.getDownloadURL().then(url=> {
      
      this.url=url;
    }).catch(function(error) {
    });
   }
  onFileSelected(event){
   
    this.selectedFile=event.target.files[0];
    console.log(this.selectedFile);
    var storageRef=storage().ref(this.id);
    var metadata={'contentType':this.selectedFile.contentType}
    console.log(storageRef);
    var task:firebase.storage.UploadTask=storageRef.put(this.selectedFile,metadata);
   
    
    task.then((uploadSnapshot: firebase.storage.UploadTaskSnapshot) => {
      
      storageRef.child(this.id).getDownloadURL().then(url=> {
        
        this.url=url;
      }).catch(function(error) {
      });

      task.snapshot.ref.getDownloadURL().then(downloadURL => {
        this.url = downloadURL;
        console.log('URL:' + this.url);
      });
    });

  }
}
