import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder,FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  addEmployee!: FormGroup;
  submitted=false;
  employee: Employee=new Employee();
  constructor(private formBuilder: FormBuilder,private employeeService: EmployeeService,
    private router: Router) { }

    ngOnInit() {
     this.addEmployee = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(5), this.noNumbersOrSpecialCharacters]],
      lastName: ['', [Validators.required, Validators.minLength(5), this.noNumbersOrSpecialCharacters]],
      email: ['', [Validators.required, Validators.email]],
      mobileno: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      dob: ['', [Validators.required, this.validateDOB]],
      workLocation: ['', Validators.required],
      gender: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
        }, {
          // validator: MustMatch('password', 'confirmPassword')
        });
    }
    noNumbersOrSpecialCharacters(control: any) {
      const pattern = /^[a-zA-Z ]*$/;
      if (!pattern.test(control.value)) {
        return { invalidCharacters: true };
      }
      return null;
    }
    get f() { return this.addEmployee.controls; }
  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  onSubmit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.addEmployee.invalid) {
        return;
    }

    // display form values on success
    alert('Employee Details)\n\n' + JSON.stringify(this.addEmployee.value, null, 4));
    console.log(this.employee);
    this.saveEmployee();
    
  }
  onReset() {
    this.submitted = false;
    this.addEmployee.reset();
}

validateDOB(control: AbstractControl): ValidationErrors | null {
  const selectedDate = new Date(control.value);
  const currentDate = new Date();

  if (selectedDate.getFullYear() > 2003) {
    return { invalidDOB: true };
  }

  return null;
}

}
