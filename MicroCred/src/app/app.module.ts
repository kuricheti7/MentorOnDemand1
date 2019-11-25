import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CoursesComponent } from './courses/courses.component';
import { MentorsignupComponent } from './mentorsignup/mentorsignup.component';
import { StudentsignupComponent } from './studentsignup/studentsignup.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MentorloginComponent } from './mentorlogin/mentorlogin.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { MentorsComponent } from './mentors/mentors.component';
import { AuthService } from './auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MustMatchDirective } from './directives/must-match.directive';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { AdminLoginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserlistComponent } from './userlist/userlist.component';
import { MentorlistComponent } from './mentorlist/mentorlist.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { CourselistComponent } from './courselist/courselist.component';
import { EditcourseComponent } from './editcourse/editcourse.component';
import { UserdboComponent } from './userdbo/userdbo.component';
import { MentordboComponent } from './mentordbo/mentordbo.component';
import { PaymentComponent } from './payment/payment.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { MentorprofileComponent } from './mentorprofile/mentorprofile.component';
import { EdituserprofileComponent } from './edituserprofile/edituserprofile.component';
import { EditmentorprofileComponent } from './editmentorprofile/editmentorprofile.component';
import { CompletedtrainingsComponent } from './completedtrainings/completedtrainings.component';
import { OngoingtrainingsComponent } from './ongoingtrainings/ongoingtrainings.component';
import { MentorcompletedtrainingsComponent } from './mentorcompletedtrainings/mentorcompletedtrainings.component';
import { MentorongoingtrainingsComponent } from './mentorongoingtrainings/mentorongoingtrainings.component';
import { AddTrainingComponent } from './add-training/add-training.component';
import { ApplytrainingComponent } from './applytraining/applytraining.component';
import { PaymentlistComponent } from './paymentlist/paymentlist.component';
import { TrainingslistComponent } from './trainingslist/trainingslist.component';





@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomepageComponent,
    NavbarComponent,
    CoursesComponent,
    MentorsignupComponent,
    StudentsignupComponent,
    AboutusComponent,
    MentorloginComponent,
    StudentloginComponent,
    MentorsComponent,
    DashboardComponent,
    MustMatchDirective,
    AdminLoginComponent,
    AdmindashboardComponent,
    UserlistComponent,
    MentorlistComponent,
    AddcourseComponent,
    CourselistComponent,
    EditcourseComponent,
    UserdboComponent,
    MentordboComponent,
    PaymentComponent,
    TrainingsComponent,
    UserprofileComponent,
    MentorprofileComponent,
    EdituserprofileComponent,
    EditmentorprofileComponent,
    CompletedtrainingsComponent,
    OngoingtrainingsComponent,
    MentorcompletedtrainingsComponent,
    MentorongoingtrainingsComponent,
    AddTrainingComponent,
    ApplytrainingComponent,
    PaymentlistComponent,
    TrainingslistComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
