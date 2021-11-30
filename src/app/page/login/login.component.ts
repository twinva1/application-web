import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      // account: ['', Validators.pattern('^[a-zA-Z0-9-_]{5,20}')],
      // password: ['', Validators.pattern('^[a-zA-Z0-9-_]{5,20}')],
      account: ['', Validators.required],
      password: ['', Validators.required],
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
      console.log('login vals invalid');
      return;
    }
    console.log('login send', this.form.value);
  };
}
