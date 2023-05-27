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
  certificateTypes: string[] = ['SICK', 'CASUAL', 'EMERGENCY']; // Example leave types
  selectedTcertificateType: string;
  issueDate: string;
  expiryDate: string;
  errorMessage: string;
  message: string;

  constructor() {
   
  }

  submitForm(): void {
    // Handle form submission logic here
    if (!this.selectedTcertificateType || !this.issueDate || !this.expiryDate) {
      this.errorMessage = 'Please fill in all fields.';
      return;
    }
  
    // Additional form validation and submission code goes here

    // Clear error message
    
    this.errorMessage = '';
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}