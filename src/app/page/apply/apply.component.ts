import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplyDataService } from 'app/service/applyData.service';
import {
  expenseOption,
  requestStatusOption,
  RequestStatus,
  ExpenseType,
} from 'app/util/constants';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss'],
})
export class ApplyComponent implements OnInit {
  form!: FormGroup;
  expenseOption = expenseOption;
  requestStatusOption = requestStatusOption;
  selectedExpense: String = 'all';

  displayedColumns = [
    'expense',
    'status',
    'amount',
    'startDate',
    'actions'
  ];
  dataSource = this.applyData.data.map((e) => ({
    ...e,
    status: RequestStatus[+e.status],
    expense: ExpenseType[e.expense as keyof typeof ExpenseType],
  }));

  constructor(
    private formBuilder: FormBuilder,
    private applyData: ApplyDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const todayAddSevenDay = new Date();
    todayAddSevenDay.setDate(todayAddSevenDay.getDate() + 7);
    const todayMinusSevenDay = new Date();
    todayMinusSevenDay.setDate(todayMinusSevenDay.getDate() - 7);

    this.form = this.formBuilder.group({
      expense: 'all',
      status: 0,
      reason: '',
      startDate: todayMinusSevenDay,
      endDate: todayAddSevenDay,
    });

    this.handleSearch();
  }

  handleSearch() {
    console.log(this.dataSource)
    console.log('search', this.form.value);
  }

  handleReset(e: Event) {
    // e.preventDefault();
    this.form.reset({ expense: 'all', status: 0 });
    this.handleSearch();
  }

  handleAddApply(e: Event) {
    // e.preventDefault();
    this.router.navigate(['/apply/add']);
  }
}
