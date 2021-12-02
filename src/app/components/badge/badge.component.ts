import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class StatusBadgeComponent implements OnInit {
  @Input() type = '';
  constructor() {}

  ngOnInit(): void {}
}
