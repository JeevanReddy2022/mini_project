import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {
  updateEmployee !:FormGroup;
  submitted=false;
  id: number;
  employee:Employee = new Employee();
  constructor(private formBuilder: FormBuilder,private employeeService: EmployeeService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() :void{
    this.id= this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
    this.updateEmployee = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }
  
  get f() {
    return this.updateEmployee.controls;
  }

  onSubmit(){
    this.submitted = true;

    if (this.updateEmployee.invalid) {
      return;
    }
    
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }
  onReset() {
    this.submitted = false;
    this.updateEmployee.reset();
  }

  goToEmployeeList(){
    this.router.navigate(['/employees-list']);
  }

}

