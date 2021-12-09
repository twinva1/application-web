import { Component } from '@angular/core';
import { environment } from 'environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'application-web';

  constructor() {
    console.log('env:', environment);
  }
}
