import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatestatusComponent } from './certificatestatus.component';

describe('CertificatestatusComponent', () => {
  let component: CertificatestatusComponent;
  let fixture: ComponentFixture<CertificatestatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificatestatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificatestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
