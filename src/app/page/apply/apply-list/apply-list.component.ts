import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'app/service/account.service';
import { ApplyDataService } from 'app/service/applyData.service';
import { expenseOption, requestStatusOption, RequestStatus, ExpenseType, RequestBadgeStatus } from 'app/util/constants';

@Component({
  selector: 'app-apply-list',
  templateUrl: './apply-list.component.html',
  styleUrls: ['./apply-list.component.scss'],
})
export class ApplyListComponent implements OnInit {
  userInfo = this.accountService.userInfo.getValue();
  form!: FormGroup;
  expenseOption = expenseOption;
  requestStatusOption = requestStatusOption;
  selectedExpense: String = 'all';

  displayedColumns = ['id', 'type', 'status', 'amount', 'startDate', 'actions'];
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
    this.getApplyData();

    const todayAddSevenDay = new Date();
    todayAddSevenDay.setDate(todayAddSevenDay.getDate() + 7);
    const todayMinusSevenDay = new Date();
    todayMinusSevenDay.setDate(todayMinusSevenDay.getDate() - 7);

    this.form = this.formBuilder.group({
      expense: 'all',
      status: 0,
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
    this.applyDataService.getAllApplyData().subscribe((data) => {
      this.loading = false;
      this.dataSource = data.map((e) => ({
        ...e,
        statusDisplayName: RequestStatus[e.status],
        statusBadge: RequestBadgeStatus[e.status],
        type: ExpenseType[e.type],
      }));
    });
  }

  handleSearch() {
    console.log('search param', this.form.value);
    this.getApplyData();
  }

  handleReset(e: Event) {
    this.form.reset({ expense: 'all', status: 0 });
    this.handleSearch();
  }

  handleAddApply(e: Event) {
    this.router.navigate(['/apply/add']);
  }

  handleLogout() {
    this.accountService.logout();
  }

  handleCancel(id: number) {
    this.applyDataService.setApplyStatus({
      id,
      status: RequestStatus.Canceled,
    });
    this.handleSearch();
  }
}
