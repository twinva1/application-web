import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyApproveComponent } from './apply-approve.component';

describe('ApplyApproveComponent', () => {
  let component: ApplyApproveComponent;
  let fixture: ComponentFixture<ApplyApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyApproveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
