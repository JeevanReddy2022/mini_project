import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
 {path:'home',component:HomeComponent},
  { path : 'employees' , component: EmployeeListComponent},
  { path : 'create-employee', component: CreateEmployeeComponent},
  { path : '', redirectTo: 'employees', pathMatch: 'full'},
  { path : 'update-employee/:id', component: UpdateEmployeeComponent},
  { path : 'employee-details/:id', component: EmployeeDetailsComponent},
  {path:'manager',component:ManagerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
