import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-add',
  templateUrl: './apply-add.component.html',
  styleUrls: ['./apply-add.component.scss'],
})
export class ApplyAddComponent implements OnInit {
  form!: FormGroup;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleCancel() {
    this.router.navigate(['/apply']);
  }

  handleApply() {}
}
