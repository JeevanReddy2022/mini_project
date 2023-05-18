import { Component } from '@angular/core';

@Component({
  selector: 'app-applyleave',
  templateUrl: './applyleave.component.html',
  styleUrls: ['./applyleave.component.css']
})
export class ApplyleaveComponent {
  leaveTypes: string[] = ['SICK', 'CASUAL', 'EMERGENCY']; // Example leave types
  selectedLeaveType: string;
  toDate: string;
  fromDate: string;
  errorMessage: string;
  message: string;

  constructor() {
    const today = new Date();
    this.toDate = this.formatDate(today);
   
  }

  validateToDate(): void {
    const toDateValue = new Date(this.toDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set today's time to midnight for comparison

    if (isNaN(toDateValue.getTime()) || toDateValue < today) {
      // Show error message for incorrect or previous date
      this.errorMessage = 'Invalid date. Please select a future date.';
    } else {
      this.errorMessage = '';
    }
  }

  submitForm(): void {
    // Handle form submission logic here
    if (!this.selectedLeaveType || !this.toDate || !this.fromDate) {
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

