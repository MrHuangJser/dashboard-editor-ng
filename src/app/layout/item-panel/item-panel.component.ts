import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'div.item-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <item-icon icon="text"></item-icon>
    <item-icon icon="switch"></item-icon>
  `
})
export class ItemPanelComponent {
  constructor() {}
}
