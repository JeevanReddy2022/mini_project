import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveRejectCertificatesComponent } from './approve-reject-certificates.component';

describe('ApproveRejectCertificatesComponent', () => {
  let component: ApproveRejectCertificatesComponent;
  let fixture: ComponentFixture<ApproveRejectCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveRejectCertificatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveRejectCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
