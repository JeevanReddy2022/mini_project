import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface Attendance {
  employeeID: string;
  date: string;
}

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.css']
})
export class AttendenceComponent {
  email: string;
  selectedDate: string;
  attendanceList: Attendance[] = [];

  constructor(private http: HttpClient) {}

  submitAttendance(): void {
    const newAttendance: Attendance = {
      employeeID: this.email,
      date: this.selectedDate
    };

    // Make an HTTP POST request to save the attendance data
    this.http.post('/api/v1/attendance', newAttendance)
      .subscribe(
        (response: any) => {
          // On successful submission, update the table
          this.attendanceList.push(newAttendance);
          this.email = '';
          this.selectedDate = '';
        },
        (error: any) => {
          console.error('Error submitting attendance:', error);
        }
      );
  }
}
