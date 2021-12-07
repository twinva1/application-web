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
      type: ExpenseType.Traveling,
      startTime: new Date(),
      amount: 1000,
      endTime: tommorrow,
      reason: 'Example expense reason ...\nExample expense reason ...\n',
    });
  }

  handleCancel() {
    this.router.navigate(['/apply']);
  }

  handleApply() {
    console.log('apply data:', this.form.value);
    this.applyDataService
      .addData({
        ...this.form.value,
        startTime: new Date(this.form.value.startTime).toISOString(),
        endTime: new Date(this.form.value.endTime).toISOString(),
        createTime: new Date(),
      })
      .subscribe((e) => {
        this.router.navigate(['/apply']);
      });
  }
}
