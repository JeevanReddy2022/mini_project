import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
interface Certificate {
  id: number;
  name: string;
  issueDate: string;
  status: string;
}
@Component({
  selector: 'app-certificatestatus',
  templateUrl: './certificatestatus.component.html',
  styleUrls: ['./certificatestatus.component.css']
})
export class CertificatestatusComponent implements OnInit {
    certificates: Certificate[] = [];
  
    constructor(private http: HttpClient) {}
  
    ngOnInit(): void {
      this.fetchCertificateData();
    }
  
    fetchCertificateData(): void {
      this.http.get<Certificate[]>('/api/certificates').subscribe(
        (data) => {
          this.certificates = data;
        },
        (error) => {
          console.error('Error fetching certificate data:', error);
        }
      );
    }
  
    updateCertificateStatus(certificate: Certificate): void {
      // Perform any necessary logic or validation
  
      // Send updated certificate data to the backend
      this.http.put('/api/certificates/' + certificate.id, certificate).subscribe(
        () => {
          console.log('Certificate status updated successfully');
        },
        (error) => {
          console.error('Error updating certificate status:', error);
        }
      );
    }
  }
  
