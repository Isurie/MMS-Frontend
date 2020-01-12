import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MdComponentsModule } from './md-components.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';
import { EventsComponent } from './events/events.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PaymentsComponent } from './payments/payments.component';
import { environment } from 'src/environments/environment';
import { FeedbackService } from './feedback.service';
import { ContactService } from './contact.service';
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { PmComponent } from './pm/pm.component';
import { AddimageComponent } from './member/addimage/addimage.component';
import { DataTableComponent } from './member/data-table/data-table.component';
import { JoinedeventsTableComponent } from './member/joinedevents-table/joinedevents-table.component';
import { MainNavComponent } from './member/main-nav/main-nav.component';
import { MemberdetailsComponent } from './member/memberdetails/memberdetails.component';
import { UpdateprofComponent } from './member/updateprof/updateprof.component';
import { MemberService } from './member/member.service';
import { EventCreationComponent } from './admin-new/event-creation/event-creation.component';
import { EventHistoryComponent } from './admin-new/event-history/event-history.component';
import { FeedbacksComponent } from './admin-new/feedbacks/feedbacks.component';
import { AdminNavComponent } from './admin-new/admin-nav/admin-nav.component';
import { MemberListComponent } from './admin-new/member-list/member-list.component';
import { MemberReportsComponent } from './admin-new/member-reports/member-reports.component';
import { RequestAdminComponent } from './admin-new/request-admin/request-admin.component';
import { EventHistoryService } from './admin-new/event-history.service';
import { EventService } from './admin-new/event.service';
import { MembersService } from './admin-new/members.service';
import { ShowFeedbackService } from './admin-new/shared/showfeedback.service';
import { ChatappComponent } from './chatapp/chatapp.component';
import { Auth1Service } from './service/auth1.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth.guard';
import { TodoComponent } from './member/todo/todo.component';
import { TodoService } from './member/todo/shared/todo.service';
import { RatingComponent } from './member/rating/rating.component';
import { UpdateEventsComponent } from './admin-new/update-events/update-events.component';
import { DataTable2Component } from './admin-new/data-table2/data-table2.component';
import { MatDialog, MatTableModule, MatDialogModule, MAT_DIALOG_DATA, MatDialogRef, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MemberDataTableComponent } from './admin-new/member-data-table/member-data-table.component';
import { MemcontactComponent } from './admin-new/memcontact/memcontact.component';
import { MemcontactService } from './admin-new/memcontact.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Angular2CsvModule } from 'angular2-csv';
import { DetailsComponent } from './member/details/details.component';
import { GenerateReportComponent } from './admin-new/generate-report/generate-report.component';
import { PrintComponent } from './admin-new/print/print.component';
import { DbService } from './service/db.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    TeamComponent,
    EventsComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    FeedbackComponent,
    RegisterComponent,
    LoginComponent,
    PaymentsComponent,
    AdminComponent,
    UserComponent,
    PmComponent,
    AddimageComponent,
    DataTableComponent,
    JoinedeventsTableComponent,
    MainNavComponent,
    MemberdetailsComponent,
    UpdateprofComponent,
    EventCreationComponent,
    EventHistoryComponent,
    FeedbacksComponent,
    AdminNavComponent,
    MemberListComponent,
    MemberReportsComponent,
    RequestAdminComponent,
    ChatappComponent,
    RatingComponent,
    UpdateEventsComponent,
    DataTable2Component,
    MemberDataTableComponent,
    MemcontactComponent,
    DetailsComponent,
    TodoComponent,
    GenerateReportComponent,
    PrintComponent
    ],


    entryComponents:[
      UpdateEventsComponent,GenerateReportComponent,
      ],
      
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'smhouse-feedbacks'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MdComponentsModule,
    HttpClientModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    Angular2CsvModule,
  ],
  providers: [
    FeedbackService,
    ContactService,
    httpInterceptorProviders,
    MemberService,
    EventHistoryService,
    EventService,
    MembersService,
    ShowFeedbackService,
    Auth1Service,
    AuthService,
    AuthGuard,
    TodoService,
    AngularFirestore,
    MemcontactService,
    DbService
    
  ],


  bootstrap: [AppComponent]
})
export class AppModule { }
