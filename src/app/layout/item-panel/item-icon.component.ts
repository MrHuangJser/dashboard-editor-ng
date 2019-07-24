import { Component, Input } from '@angular/core';

@Component({
  selector: 'item-icon',
  template: `
    <div class="item-icon">
      <a>
        <i class="svg-icon" nz-icon [iconfont]="_icon"></i>
      </a>
    </div>
  `
})
export class ItemIconComponent {
  _icon: string;

  @Input()
  get icon() {
    return this._icon;
  }

  set icon(val: string) {
    this._icon = `icon-${val}`;
  }
}
