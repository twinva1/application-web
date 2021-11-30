import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../service/account.service';

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
    private accountService: AccountService
  ) {
    const userInfo = accountService.userInfo.getValue();
    if (userInfo) {
      const { role } = JSON.parse(userInfo);
      console.log('user logged in');
      // router.navigate(role && role === 1 ? ['/apply'] : ['/approve']);
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
    
    if (this.form.value.password === '123') {
      this.loading = true;
      this.accountService.login().subscribe((e) => {
        // this.loading = false;
        this.router.navigate(['/apply']);
      });
    }
  };
}
