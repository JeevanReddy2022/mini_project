import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
interface Certificate {
  id: number;
  name: string;
  employeeName: string;
  issueDate: string;
  status: string;
}
@Component({
  selector: 'app-approve-reject-certificates',
  templateUrl: './approve-reject-certificates.component.html',
  styleUrls: ['./approve-reject-certificates.component.css']
})
export class ApproveRejectCertificatesComponent {
  certificates: Certificate[] = [];

  constructor(private http: HttpClient) {
    this.fetchCertificates();
  }

  fetchCertificates(): void {
    this.http.get<Certificate[]>('/api/certificates').subscribe(
      (data) => {
        this.certificates = data;
      },
      (error) => {
        console.error('Error fetching certificates:', error);
      }
    );
  }

  approveCertificate(certificate: Certificate): void {
    // Perform any necessary logic or validation

    // Update the certificate status
    certificate.status = 'Approved';

    // Send updated certificate data to the backend
    this.http.put('/api/certificates/' + certificate.id, certificate).subscribe(
      () => {
        console.log('Certificate approved successfully');
      },
      (error) => {
        console.error('Error approving certificate:', error);
      }
    );
  }

  rejectCertificate(certificate: Certificate): void {
    // Perform any necessary logic or validation

    // Update the certificate status
    certificate.status = 'Rejected';

    // Send updated certificate data to the backend
    this.http.put('/api/certificates/' + certificate.id, certificate).subscribe(
      () => {
        console.log('Certificate rejected successfully');
      },
      (error) => {
        console.error('Error rejecting certificate:', error);
      }
    );
  }
}