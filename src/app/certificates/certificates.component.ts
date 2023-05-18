import { Component } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent {
  certificateTypes: string[] = ['AWS', 'SpringBoot', 'Angular','DevOps','Excel','Azure'];
  selectedCertificate: string;
  toDate: string;
  fromDate: string;
  errorMessage: string;
  message: string;

  constructor() {
  }


  submitForm(): void {
    // Handle form submission logic here
    if (!this.selectedCertificate || !this.toDate || !this.fromDate) {
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


