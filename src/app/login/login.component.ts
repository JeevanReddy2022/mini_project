import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  submitted = false;
  
  user: User = new User();

  constructor(private formBuilder: FormBuilder,private router: Router, private loginService:LoginService) { }

  navigateToUser() {
      if(this.loginForm.valid){
          this.router.navigate(['/user'])
      }
      
    }
  ngOnInit():void {
    document.getElementById("beforeLogin").style.display = "block";
    document.getElementById("afterLogin").style.display = "none";
      this.loginForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.pattern(
              '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
            )]],
      });
      
      // this.loginService.GetUser().subscribe(data=>{
      //     console.log(data);
      // })

      // this.loginService.GetRegister().subscribe(data=>{
      //   console.log(data);
      // })
      
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  // saveUser(){
  //     this.loginService.createUser(this.user).subscribe(data=>{
  //       console.log(data);
  //       this.goToPurchase();
  //     }),
  //     error=>console.log(error); 
  
  //   }

  //   goToPurchase(){
  //     this.router.navigate(['/user']);
  //   }

  getemail() {
    this.loginService.getAllRegisterList(this.user.email).subscribe(
      data=>{
        console.log(data);
        sessionStorage.setItem("loggedUserEmail",this.user.email);
        document.getElementById("beforeLogin").style.display = "none";
        document.getElementById("afterLogin").style.display = "block";
        this.router.navigate(['/billing']);
      },
      (error:HttpErrorResponse)=>{
        alert('LogIn UNSUCCESSFULL!\n\n INVALID Credentials');
      })
  }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

      // display form values on success
      // alert('LogIn SUCCESS!\n\n' + JSON.stringify(this.loginForm.value, null, 4));
      if(this.user.email=="admin@gmail.com" && this.user.password == "Admin@123"){
        console.log("Admin User");
        document.getElementById("beforeLogin").style.display = "none";
        document.getElementById("afterLogin").style.display = "block";
        this.router.navigate(['manager']);
      }else{
        this.getemail();
      }
  }

  onReset() {
      this.submitted = false;
      this.loginForm.reset();
  }

}
