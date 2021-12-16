import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class LoadingComponent implements OnInit {
  @Input() visible = false;
  constructor() {}

  ngOnInit(): void {}
}
