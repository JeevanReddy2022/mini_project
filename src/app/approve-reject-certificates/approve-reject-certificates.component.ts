// import { HttpClient } from '@angular/common/http';
// import { Component } from '@angular/core';

// interface Certificate {
//   id: number;
//   name: string;
//   employeeName: string;
//   status: string;
// }

// @Component({
//   selector: 'app-approve-reject-certificates',
//   templateUrl: './approve-reject-certificates.component.html',
//   styleUrls: ['./approve-reject-certificates.component.css']
// })
// export class ApproveRejectCertificatesComponent {
//   certificates: Certificate[] = [];

//   constructor(private http: HttpClient) {
//     this.fetchCertificates();
//   }

//   fetchCertificates(): void {
//     this.http.get<Certificate[]>('/api/certificates').subscribe(
//       (data) => {
//         this.certificates = data;
//       },
//       (error) => {
//         console.error('Error fetching certificates:', error);
//       }
//     );
//   }

//   approveCertificate(certificate: Certificate): void {
//     // Perform any necessary logic or validation

//     // Update the certificate status
//     certificate.status = 'Approved';

//     // Send updated certificate data to the backend
//     this.http.put('/api/certificates/' + certificate.id, certificate).subscribe(
//       () => {
//         console.log('Certificate approved successfully');
//       },
//       (error) => {
//         console.error('Error approving certificate:', error);
//       }
//     );
//   }

//   rejectCertificate(certificate: Certificate): void {
//     // Perform any necessary logic or validation

//     // Update the certificate status
//     certificate.status = 'Rejected';

//     // Send updated certificate data to the backend
//     this.http.put('/api/certificates/' + certificate.id, certificate).subscribe(
//       () => {
//         console.log('Certificate rejected successfully');
//       },
//       (error) => {
//         console.error('Error rejecting certificate:', error);
//       }
//     );
//   }

//   downloadCertificate(certificate: Certificate): void {
//     // Replace with the actual backend endpoint to retrieve the certificate file URL
//     const downloadUrl = '/api/certificates/' + certificate.id + '/download';
    
//     // Create a temporary anchor element
//     const anchor = document.createElement('a');
//     anchor.href = downloadUrl;
//     anchor.download = 'certificate.pdf';
    
//     // Trigger the download
//     anchor.click();
//   }
// }


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
interface Certificate {
  id: number;
  name: string;
  employeeName: string;
  status: string;
}

@Component({
  selector: 'app-approve-reject-certificates',
  templateUrl: './approve-reject-certificates.component.html',
  styleUrls: ['./approve-reject-certificates.component.css']
})
export class ApproveRejectCertificatesComponent {
  certificates: Certificate[] = [];

  constructor(private http: HttpClient, private authService: AuthService) {
    this.fetchCertificates();
  }

  fetchCertificates(): void {
    this.http.get<Certificate[]>('/api/download').subscribe(
      (data) => {
        this.certificates = data;
      },
      (error) => {
        console.error('Error fetching certificates:', error);
      }
    );
  }

  approveCertificate(certificate: Certificate): void {
   

    // Update the certificate status
    certificate.status = 'Approved';

    // Send updated certificate data to the backend
    this.http.put('/api/download/' + certificate.id, certificate).subscribe(
      () => {
        console.log('Certificate approved successfully');
      },
      (error) => {
        console.error('Error approving certificate:', error);
      }
    );
  }

  rejectCertificate(certificate: Certificate): void {
    
    // Update the certificate status
    certificate.status = 'Rejected';

    // Send updated certificate data to the backend
    this.http.put('/api/download/' + certificate.id, certificate).subscribe(
      () => {
        console.log('Certificate rejected successfully');
      },
      (error) => {
        console.error('Error rejecting certificate:', error);
      }
    );
  }

  downloadCertificate(certificate: Certificate): void {
    const loggedInEmail = this.authService.getLoggedInUserEmail();
    // Retrieve the certificate file based on the certificate ID and logged-in user's email ID
    const downloadUrl = `/api/download?emailId=${loggedInEmail}`;

    // Set the headers for the file download
    const headers = new HttpHeaders({
      'Content-Type': 'application/pdf',
      'Accept': 'application/pdf'
    });

    // Make an HTTP GET request to download the certificate file
    this.http.get(downloadUrl, { headers: headers, responseType: 'blob' }).subscribe(
      (response) => {
        // Create a temporary anchor element
        const anchor = document.createElement('a');
        const url = window.URL.createObjectURL(response);
        anchor.href = url;
        anchor.download = 'certificate.pdf';

        // Trigger the download
        anchor.click();

        // Clean up the URL object
        window.URL.revokeObjectURL(url);
      },
      (error) => {
        console.error('Error downloading certificate:', error);
      }
    );
  }
}

