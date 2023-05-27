import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { ApplyleaveComponent } from './applyleave/applyleave.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { LeavestatusComponent } from './leavestatus/leavestatus.component';
import { CertificatestatusComponent } from './certificatestatus/certificatestatus.component';
import { ApproveRejectLeaveComponent } from './approve-reject-leave/approve-reject-leave.component';
import { ApproveRejectCertificatesComponent } from './approve-reject-certificates/approve-reject-certificates.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AttendenceComponent } from './attendence/attendence.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    HeaderComponent,
    LoginComponent,
    ManagerComponent,
    ApplyleaveComponent,
    CertificatesComponent,
    LeavestatusComponent,
    CertificatestatusComponent,
    ApproveRejectLeaveComponent,
    ApproveRejectCertificatesComponent,
    FooterComponent,
    HomeComponent,
    AttendenceComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
