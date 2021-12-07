import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
//
import { AccountService } from 'app/service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private accountService: AccountService,
    private snackBar: MatSnackBar
  ) {
    const userInfo = accountService.userInfo.getValue();
    if (userInfo) {
      router.navigate(['/apply']);
    }
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      account: ['', Validators.pattern('^[a-zA-Z0-9-_]{3,20}')],
      password: ['', Validators.pattern('^[a-zA-Z0-9-_]{3,20}')],
    });
  }

  get account() {
    return this.form.get('account')!;
  }
  get password() {
    return this.form.get('password')!;
  }

  onLogin = () => {
    if (this.form.invalid) {
      return;
    }
    const { account, password } = this.form.value;

    this.loading = true;
    this.accountService.login(account, password).subscribe((e) => {
      if (e.data) {
        this.router.navigate(['/apply']);
      } else {
        // this.snackBar.open('Oops! Please try again.', 'Close');
        this.loading = false;
      }
    });
  };
}
