import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { SignUpInfo } from '../auth/signup-info';
import { TokenStorageService } from '../auth/token-storage.service';
import * as emailjs  from '../../assets/js/email.min';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  info: any;
  email;

  constructor(private authService: AuthService, private token: TokenStorageService) {
   }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
     };
     emailjs.init("user_IJAoWnKOEoQZoXI1iARi8");

   }

  onSubmit() {
    console.log(this.form);

    this.signupInfo = new SignUpInfo(
      
      this.form.fname,
      this.form.lname,
      this.form.gender,
      this.form.birthday,
      this.form.address,
      this.form.telephone,
      this.form.username,
      this.form.email,
      this.form.password);

    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;

        var template_params = {
          "to_name": this.form.fname,
          "reply_to": this.form.email,
          "from_name": "SM House",
          
       }
       
       var service_id = "default_service";
       var template_id = "template_3MndJlNo";
       emailjs.send(service_id, template_id, template_params);
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
  onSubmitEmail(formdata:NgForm,email:String){
    console.log(formdata.value.description,email);
   var template_params = {
     "to_name": this.email,
     "reply_to": this.email,
     "from_name": "SM House",
     "message_html": formdata.value.description
     
  }
  
  var service_id = "default_service";
  var template_id = "template_3MndJlNo";
  emailjs.send(service_id, template_id, template_params);
 }
 myfunc(email:String){
   this.email=email;
   
 }
}
