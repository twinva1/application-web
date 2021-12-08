import { Component, OnInit } from '@angular/core';
// import { fadeInAnimation } from 'app/util/animation';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  // animations: [fadeInAnimation],
  // host: { '[@fadeInAnimation]': '' }
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
