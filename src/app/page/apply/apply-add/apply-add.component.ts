import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplyDataService } from 'app/service';
import { ExpenseType } from 'app/util/constants';

@Component({
  selector: 'app-apply-add',
  templateUrl: './apply-add.component.html',
  styleUrls: ['./apply-add.component.scss'],
})
export class ApplyAddComponent implements OnInit {
  form!: FormGroup;
  expenseTypeOption = [
    { viewValue: 'Traveling', value: ExpenseType.Traveling },
    { viewValue: 'Group Meal', value: ExpenseType['Group Meal'] },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private applyDataService: ApplyDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const tommorrow = new Date();
    tommorrow.setDate(tommorrow.getDate() + 1);
    this.form = this.formBuilder.group({
      type: 0,
      startDate: new Date(),
      amount: 1000,
      endDate: tommorrow,
      reason: 'Example expense reason ...\nExample expense reason ...\n',
    });
  }

  handleCancel() {
    this.router.navigate(['/apply']);
  }

  handleApply() {
    console.log('apply data:', this.form.value);
    this.applyDataService.addData({...this.form.value, createDate: new Date()});
    this.router.navigate(['/apply']);
  }
}
