import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
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

  maxAmount = 5000;

  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private applyDataService: ApplyDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const tommorrow = new Date();
    tommorrow.setDate(tommorrow.getDate() + 1);
    this.form = this.formBuilder.group(
      {
        type: ExpenseType.Traveling,
        startTime: new Date(),
        amount: [1000],
        endTime: tommorrow,
        reason: '',
      },
      { validators: this.amountValidator }
    );
  }

  get amount() {
    return this.form.get('amount');
  }

  amountValidator: ValidatorFn = (control): ValidationErrors | null => {
    const type = control.get('type');
    const amount = control.get('amount');
    amount?.setErrors(null);
    if (type?.value === ExpenseType.Traveling && amount?.value > 5000) {
      this.maxAmount = 5000;
      amount?.setErrors({ max: true });
    }
    if (type?.value === ExpenseType['Group Meal'] && amount?.value > 2000) {
      this.maxAmount = 2000;
      amount?.setErrors({ max: true });
    }
    return null;    
  };

  handleCancel() {
    this.router.navigate(['/apply']);
  }

  handleApply() {    
    console.log('apply data:', this.form.value);
    if (this.form.invalid) return;
    this.loading = true;
    this.applyDataService
      .addData({
        ...this.form.value,
        startTime: new Date(this.form.value.startTime).toISOString(),
        endTime: new Date(this.form.value.endTime).toISOString(),
        // createTime: new Date(),
      })
      .subscribe((e) => {
        this.router.navigate(['/apply']);
      });
  }
}
