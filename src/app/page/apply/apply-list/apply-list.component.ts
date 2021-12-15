import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { formatDate } from '@angular/common';
//
import { AccountService, ApplyDataService } from 'app/service';
import {
  expenseOption,
  requestStatusOption,
  RequestStatus,
  ExpenseType,
  RequestBadgeStatus,
} from 'app/util/constants';
import { ApplyTableData } from 'app/util/type';

@Component({
  selector: 'app-apply-list',
  templateUrl: './apply-list.component.html',
  styleUrls: ['./apply-list.component.scss'],
})
export class ApplyListComponent implements OnInit {
  form!: FormGroup;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  totalLength = 10;
  defaultPaginationConf = {
    index: 0,
    size: 10,
  };

  expenseTypeOption = expenseOption;
  requestStatusOption = requestStatusOption;
  displayedColumns = ['id', 'type', 'status', 'amount', 'createTime', 'actions'];
  dataSource = new MatTableDataSource<ApplyTableData>([]);

  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private applyDataService: ApplyDataService,
    private router: Router,
    public accountService: AccountService
  ) {}

  ngOnInit(): void {
    const todayAddSevenDay = new Date();
    todayAddSevenDay.setDate(todayAddSevenDay.getDate() + 7);
    const todayMinusSevenDay = new Date();
    todayMinusSevenDay.setDate(todayMinusSevenDay.getDate() - 7);

    this.form = this.formBuilder.group({
      type: '',
      status: this.accountService.isAdmin ? RequestStatus.Submitted : '',
      // reason: '',
      startTime: '',
      endTime: '',
      // startTime: todayMinusSevenDay,
      // endTime: todayAddSevenDay,
    });

    this.handleSearch();
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe((page: PageEvent) => {
      this.getApplyData(page.pageIndex, page.pageSize);
    });
  }

  getApplyData(page = 0, pageSize = 10) {
    this.loading = true;
    const condition = this.form.value;
    Object.keys(condition).forEach((e) => {
      if (!condition[e]) delete condition[e];
    });
    if (condition.startTime)
      condition.startTime = formatDate(condition.startTime, 'yyyy-MM-dd', 'en-US');
    if (condition.endTime) condition.endTime = formatDate(condition.endTime, 'yyyy-MM-dd', 'en-US');
    console.log('condition', condition);
    this.applyDataService.getAllData({ page, pageSize, ...condition }).subscribe((res) => {
      this.loading = false;
      let filterData = res.data.expenses;
      this.totalLength = res.data.totalElements;
      // Object.keys(condition).forEach((e) => {
      //   if (!condition[e] && typeof condition[e] !== 'number') delete condition[e];
      // });
      // if (Object.keys(condition).length) {
      //   filterData = filterData.filter((e) => {
      //     if (typeof condition.type === 'number' && e.type !== condition.type) {
      //       return false;
      //     }
      //     if (typeof condition.status === 'number' && e.status !== condition.status) {
      //       return false;
      //     }
      //     if (condition.startTime && condition.endTime) {
      //       const { startTime, endTime } = condition;
      //       const sDate = new Date(startTime <= endTime ? startTime : endTime);
      //       const eDate = new Date(startTime <= endTime ? endTime : startTime);
      //       const createTime = new Date(e.createTime);
      //       if (createTime < sDate || createTime > eDate) return false;
      //     }
      //     return true;
      //   });
      // }

      this.dataSource = new MatTableDataSource<ApplyTableData>(
        filterData.map((e) => ({
          ...e,
          statusDisplayName: RequestStatus[e.status],
          statusBadge: RequestBadgeStatus[e.status],
          type: ExpenseType[e.type],
        }))
      );
      // this.dataSource.paginator = this.paginator;
    });
  }

  handleSearch() {
    this.getApplyData();
  }

  handleReset(e: Event) {
    this.form.reset({ type: '', status: '' });
    this.handleSearch();
  }

  handleAddApply(e: Event) {
    this.router.navigate(['/apply/add']);
  }

  handleCancel(id: number) {
    this.applyDataService
      .setStatus({
        id,
        status: RequestStatus.Canceled,
      })
      .subscribe(() => {
        this.handleSearch();
      });
  }
}
