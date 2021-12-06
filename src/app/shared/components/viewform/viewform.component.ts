import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
//
import { ApplyViewData } from 'app/util/type';
import { ApplyDataService } from 'app/service';
import { RequestStatus } from 'app/util/constants';

@Component({
  selector: 'app-viewform',
  templateUrl: './viewform.component.html',
  styleUrls: ['./viewform.component.scss'],
})
export class ViewFormComponent implements OnInit {
  @Input() type: 'approve' | 'view' = 'view';
  @Input() dataSource: ApplyViewData = {
    id: 1,
    type: 'Submitted',
    createDate: '2021-01-21',
    startDate: '2021-01-21',
    status: 'Submitted',
    endDate: '2021-01-22',
    amount: 10000,
    reason: 'For training purpose',
  };

  displayName = {
    id: 'ID',
    type: 'Expense Type',
    startDate: 'Start Date',
    status: 'Expense Status',
    endDate: 'End Date',
    amount: 'Amount',
    reason: 'Reason',
    createDate: '',
  };

  formOrderArray: (keyof ApplyViewData)[] = ['type', 'startDate', 'status', 'endDate', 'amount', 'reason'];

  constructor(private route: Router, private applyDataService: ApplyDataService) {}

  ngOnInit(): void {}

  handleApprove() {
    this.applyDataService.setStatus({
      id: this.dataSource.id,
      status: RequestStatus.Approved,
    });
    this.handleBack();
  }

  handleReject() {
    this.applyDataService.setStatus({
      id: this.dataSource.id,
      status: RequestStatus.Rejected,
    });
    this.handleBack();
  }

  handleBack() {
    this.route.navigate(['/apply']);
  }
}
