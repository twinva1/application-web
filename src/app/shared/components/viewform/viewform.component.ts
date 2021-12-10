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
  @Input() dataSource: ApplyViewData & { [key: string]: any } = {
    id: 1,
    userId: 2,
    type: 'Submitted',
    createTime: '2021-01-21',
    startTime: '2021-01-21',
    status: 'Submitted',
    endTime: '2021-01-22',
    amount: 10000,
    reason: 'For training purpose',
  };

  displayName: { [key: string]: string } = {
    id: 'ID',
    userId: 'User',
    type: 'Expense Type',
    startTime: 'Start Date',
    status: 'Expense Status',
    endTime: 'End Date',
    amount: 'Amount',
    reason: 'Reason',
    createTime: '',
  };

  public orderArray: (keyof ApplyViewData)[] = [
    'type',
    'startTime',
    'status',
    'endTime',
    'amount',
    'reason',
  ];

  loading = false;

  constructor(private route: Router, private applyDataService: ApplyDataService) {}

  ngOnInit(): void {}

  changeStatus(status: 'approve' | 'reject') {
    this.loading = true;
    this.applyDataService
      .setStatus({
        id: this.dataSource.id,
        status: status === 'approve' ? RequestStatus.Approved : RequestStatus.Rejected,
      })
      .subscribe(() => {
        this.loading = false;
        this.handleBack();
      });
  }

  handleBack() {
    this.route.navigate(['/apply']);
  }
}
