import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
//
import { AccountService, ApplyDataService } from 'app/service';
import {
  expenseOption,
  requestStatusOption,
  RequestStatus,
  ExpenseType,
  RequestBadgeStatus,
} from 'app/util/constants';
import { ApplyData } from 'app/util/type';

@Component({
  selector: 'app-apply-list',
  templateUrl: './apply-list.component.html',
  styleUrls: ['./apply-list.component.scss'],
})
export class ApplyListComponent implements OnInit, AfterViewInit { 
  form!: FormGroup;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  defaultPaginationConf = {
    index: 0,
    size: 10,
  };
  expenseTypeOption = expenseOption;
  requestStatusOption = requestStatusOption;
  displayedColumns = ['id', 'type', 'status', 'amount', 'createTime', 'actions'];
  dataSource = new MatTableDataSource<Partial<ApplyData> & { [key: string]: any }>([]);

  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private applyDataService: ApplyDataService,
    private router: Router,
    public accountService: AccountService,
  ) {}

  ngOnInit(): void {    
    const todayAddSevenDay = new Date();
    todayAddSevenDay.setDate(todayAddSevenDay.getDate() + 7);
    const todayMinusSevenDay = new Date();
    todayMinusSevenDay.setDate(todayMinusSevenDay.getDate() - 7);

    this.form = this.formBuilder.group({
      type: '',
      status: '',
      reason: '',
      startTime: '',
      endTime: '',
      // startTime: todayMinusSevenDay,
      // endTime: todayAddSevenDay,
    });

    this.handleSearch();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getApplyData() {
    this.loading = true;
    this.applyDataService.getAllData().subscribe((res) => {
      this.loading = false;
      const condition = this.form.value;
      let filterData = res.data;      
      Object.keys(condition).forEach((e) => {
        if (!e && typeof e !== 'number') delete condition[e];
      });
      if (Object.keys(condition).length) {
        filterData = filterData.filter((e) => {
          if (typeof condition.type === 'number' && e.type !== condition.type) {
            return false;
          }
          if (typeof condition.status === 'number' && e.status !== condition.status) {
            return false;
          }
          if (condition.startTime && condition.endTime) {
            const { startTime, endTime } = condition;
            const sDate = new Date(startTime <= endTime ? startTime : endTime);
            const eDate = new Date(startTime <= endTime ? endTime : startTime);
            const createTime = new Date(e.createTime);
            if (createTime < sDate || createTime > eDate) return false;
          }
          return true;
        });
      }

      this.dataSource = new MatTableDataSource<{ [key: string]: any }>(
        filterData.map((e) => ({
          ...e,
          statusDisplayName: RequestStatus[e.status],
          statusBadge: RequestBadgeStatus[e.status],
          type: ExpenseType[e.type],
        }))
      );
      this.dataSource.paginator = this.paginator;
    });
  }

  handleSearch() {
    // console.log('search param', this.form.value);
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

  onPageChange(pageEvent: PageEvent) {
    // TODO: integrate with backend pagination parameters
    // console.log(pageEvent);
    console.log(this.paginator);
  }
}
