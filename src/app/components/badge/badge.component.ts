import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent implements OnInit {
  @Input() status: 'success' | 'error' | 'default' | 'processing' | 'warning' = 'processing';
  @Input() text: string = 'Badge Default Text';
  constructor() {}

  ngOnInit(): void {}
}

// Success
// Error
// Default
// Processing
// Warning
