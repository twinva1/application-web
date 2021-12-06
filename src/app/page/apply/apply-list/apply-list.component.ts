import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'app/service';
import { ApplyDataService } from 'app/service';
import { expenseOption, requestStatusOption, RequestStatus, ExpenseType, RequestBadgeStatus } from 'app/util/constants';

@Component({
  selector: 'app-apply-list',
  templateUrl: './apply-list.component.html',
  styleUrls: ['./apply-list.component.scss'],
})
export class ApplyListComponent implements OnInit {
  userInfo = this.accountService.userInfo.getValue();
  form!: FormGroup;
  expenseTypeOption = expenseOption;
  requestStatusOption = requestStatusOption;
  // selectedExpense: String = 'all';

  displayedColumns = ['id', 'type', 'status', 'amount', 'createDate', 'actions'];
  dataSource: any[] = [];

  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private applyDataService: ApplyDataService,
    private router: Router,
    public accountService: AccountService
  ) {}

  ngOnInit(): void {
    // this.accountService.userInfo.subscribe((e) => (this.userInfo = e));

    const todayAddSevenDay = new Date();
    todayAddSevenDay.setDate(todayAddSevenDay.getDate() + 7);
    const todayMinusSevenDay = new Date();
    todayMinusSevenDay.setDate(todayMinusSevenDay.getDate() - 7);

    this.form = this.formBuilder.group({
      type: '',
      status: '',
      reason: '',
      startDate: '',
      endDate: '',
      // startDate: todayMinusSevenDay,
      // endDate: todayAddSevenDay,
    });

    this.handleSearch();
  }

  getApplyData() {
    this.loading = true;
    this.applyDataService.getAllData().subscribe((data) => {
      this.loading = false;
      const condition = this.form.value;
      let filterData = data;
      Object.keys(condition).forEach((e) => {
        if (!e && typeof e !== 'number') delete condition[e];
      });
      if (Object.keys(condition).length) {
        filterData = data.filter((e) => {
          if (typeof condition.type === 'number' && e.type !== condition.type) {
            return false;
          }
          if (typeof condition.status === 'number' && e.status !== condition.status) {
            return false;
          }
          if (condition.startDate && condition.endDate) {
            const { startDate, endDate } = condition;
            const sDate = new Date(startDate <= endDate ? startDate : endDate);
            const eDate = new Date(startDate <= endDate ? endDate : startDate);
            const createDate = new Date(e.createDate);
            if (createDate < sDate || createDate > eDate) return false;
          }
          return true;
        });
      }

      this.dataSource = filterData.map((e) => ({
        ...e,
        statusDisplayName: RequestStatus[e.status],
        statusBadge: RequestBadgeStatus[e.status],
        type: ExpenseType[e.type],
      }));
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

  handleLogout() {
    this.accountService.logout();
  }

  handleCancel(id: number) {
    this.applyDataService.setStatus({
      id,
      status: RequestStatus.Canceled,
    });
    this.handleSearch();
  }
}
