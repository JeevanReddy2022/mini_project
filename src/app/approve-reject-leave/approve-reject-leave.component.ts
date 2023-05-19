import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


interface LeaveRequest {
  id: number;
  employeeName: string;
  leaveType: string;
  fromDate: string;
  toDate: string;
  status: string;
}
@Component({
  selector: 'app-approve-reject-leave',
  templateUrl: './approve-reject-leave.component.html',
  styleUrls: ['./approve-reject-leave.component.css']
})
export class ApproveRejectLeaveComponent implements OnInit {
  leaveRequests: LeaveRequest[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchLeaveRequests();
  }

  fetchLeaveRequests(): void {
    this.http.get<LeaveRequest[]>('/api/leave-requests').subscribe(
      (data) => {
        this.leaveRequests = data;
      },
      (error) => {
        console.error('Error fetching leave requests:', error);
      }
    );
  }

  approveLeave(leaveRequest: LeaveRequest): void {
    // Perform any necessary logic or validation

    // Update the leave request status
    leaveRequest.status = 'Approved';

    // Send updated leave request data to the backend
    this.http.put('/api/leave-requests/' + leaveRequest.id, leaveRequest).subscribe(
      () => {
        console.log('Leave request approved successfully');
      },
      (error) => {
        console.error('Error approving leave request:', error);
      }
    );
  }

  rejectLeave(leaveRequest: LeaveRequest): void {
    // Perform any necessary logic or validation

    // Update the leave request status
    leaveRequest.status = 'Rejected';

    // Send updated leave request data to the backend
    this.http.put('/api/leave-requests/' + leaveRequest.id, leaveRequest).subscribe(
      () => {
        console.log('Leave request rejected successfully');
      },
      (error) => {
        console.error('Error rejecting leave request:', error);
      }
    );
  }
}
