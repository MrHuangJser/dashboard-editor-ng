import { Component } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd';
import { animations } from './layout/layout.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [...animations]
})
export class AppComponent {
  title = 'editor-ng';
  constructor(private iconSrv: NzIconService) {
    this.iconSrv.fetchFromIconfont({
      scriptUrl: `//at.alicdn.com/t/font_1310204_b2yucvn34fa.js`
    });
  }
}
