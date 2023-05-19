import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveRejectLeaveComponent } from './approve-reject-leave.component';

describe('ApproveRejectLeaveComponent', () => {
  let component: ApproveRejectLeaveComponent;
  let fixture: ComponentFixture<ApproveRejectLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveRejectLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveRejectLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
