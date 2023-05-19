import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface LeaveApplication {
  leaveType: string;
  fromDate: string;
  toDate: string;
  status: string;
}

@Component({
  selector: 'app-leavestatus',
  templateUrl: './leavestatus.component.html',
  styleUrls: ['./leavestatus.component.css']
})

export class LeavestatusComponent implements OnInit {
  appliedLeaves: LeaveApplication[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchLeaveApplications();
  }

  fetchLeaveApplications(): void {
    // Replace 'your-api-endpoint' with the actual URL to your backend API
    this.http.get<LeaveApplication[]>('your-api-endpoint')
      .subscribe(
        (data: LeaveApplication[]) => {
          this.appliedLeaves = data;
        },
        (error: any) => {
          console.error('Error fetching leave applications:', error);
        }
      );
  }
}
