import { Component, Input } from '@angular/core';

import { God } from './god';

@Component({
  selector: 'app-demo',
  templateUrl: './app-demo.component.html',
  styleUrls: ['./app-demo.component.scss'],
})

export class AppDemoComponent {
  @Input() god: God;
}
