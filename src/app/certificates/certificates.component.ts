// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-certificates',
//   templateUrl: './certificates.component.html',
//   styleUrls: ['./certificates.component.css']
// })
// export class CertificatesComponent {
//   selectedFile: File;
//   fromDate: string;
//   toDate: string;
//   errorMessage: string;
//   message: string;

//   constructor(private http: HttpClient) {
//   }

//   submitForm(): void {
//     if (!this.selectedFile || !this.fromDate || !this.toDate) {
//       this.errorMessage = 'Please fill in all fields.';
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', this.selectedFile);
//     formData.append('fromDate', this.fromDate);
//     formData.append('toDate', this.toDate);

//     // Send the form data to the backend
//     this.http.post('backend-url', formData)
//       .subscribe(
//         response => {
//           this.message = 'File uploaded successfully.';
//         },
//         error => {
//           this.errorMessage = 'Error uploading file. Please try again.';
//         }
//       );

//     // Clear error message
//     this.errorMessage = '';
//   }

//   onFileChange(event: any): void {
//     const files = event.target.files;
//     if (files && files.length > 0) {
//       this.selectedFile = files[0];
//     }
//   }
// }


import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent {
  selectedFile: File;
  errorMessage: string;
  message: string;

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  submitForm(): void {
    if (!this.selectedFile) {
      this.errorMessage = 'Please select a file.';
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    // Retrieve the logged-in user's email from the authentication service
    const loggedInEmail = this.authService.getLoggedInUserEmail();

    // Send the form data to the backend along with the logged-in user's email ID
    this.http.post(`backend-url/upload?emailId=${loggedInEmail}`, formData)
      .subscribe(
        response => {
          this.message = 'File uploaded successfully.';
        },
        error => {
          this.errorMessage = 'Error uploading file. Please try again.';
        }
      );

    // Clear error message
    this.errorMessage = '';
  }

  onFileChange(event: any): void {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.selectedFile = files[0];
    }
  }
}
