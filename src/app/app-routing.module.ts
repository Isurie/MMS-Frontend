import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PaymentsComponent } from './payments/payments.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { PmComponent } from './pm/pm.component';
import { UpdateprofComponent } from './member/updateprof/updateprof.component';
import { MemberdetailsComponent } from './member/memberdetails/memberdetails.component';
import { MainNavComponent } from './member/main-nav/main-nav.component';
import { EventCreationComponent } from './admin-new/event-creation/event-creation.component';
import { EventHistoryComponent } from './admin-new/event-history/event-history.component';
import { FeedbacksComponent } from './admin-new/feedbacks/feedbacks.component';
import { MemberListComponent } from './admin-new/member-list/member-list.component';
import { RequestAdminComponent } from './admin-new/request-admin/request-admin.component';
import { MemberReportsComponent } from './admin-new/member-reports/member-reports.component';
import { AuthGuard } from './auth.guard';
import { TodoComponent } from './member/todo/todo.component';
import { ChatappComponent } from './chatapp/chatapp.component';
import { MemcontactComponent } from './admin-new/memcontact/memcontact.component';
import { RatingComponent } from './member/rating/rating.component';
import { DetailsComponent } from './member/details/details.component';
import { DataTableComponent } from './member/data-table/data-table.component';
import {PrintComponent} from './admin-new/print/print.component'

const routes: Routes=[
  { path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'events', component: EventsComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'chatapp', component: ChatappComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'pm', component: PmComponent, canActivate: [AuthGuard] },
  { path: 'payments', component: PaymentsComponent },
  { path:'members',component:UpdateprofComponent, canActivate: [AuthGuard] },
  { path: 'memberdetails', component: MemberdetailsComponent, canActivate: [AuthGuard] },
  { path: 'updateprof', component: DetailsComponent, canActivate: [AuthGuard] },
  { path: 'todolist', component: TodoComponent, canActivate: [AuthGuard]},
  { path: 'ratingevents',component:RatingComponent, canActivate: [AuthGuard]},
  { path: 'eventdetails',component:DataTableComponent, canActivate: [AuthGuard]},

  { path: "eventcreation", component: EventCreationComponent, canActivate: [AuthGuard] },
  { path: "history", component: EventHistoryComponent, canActivate: [AuthGuard] },
  { path: "analysefeedbacks", component: FeedbacksComponent, canActivate: [AuthGuard] },
  { path: "memberList", component: MemberListComponent, canActivate: [AuthGuard] },
  { path: "requestAdmin", component: RequestAdminComponent, canActivate: [AuthGuard] },
  { path: "memberReports", component: MemberReportsComponent, canActivate: [AuthGuard] },
  { path: "memcontact", component: MemcontactComponent },
  { path: "memberReports/:id/print", component: PrintComponent }
  

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
