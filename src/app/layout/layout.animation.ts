import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';

export const animations: AnimationTriggerMetadata[] = [
  trigger('leftIn', [
    transition(':enter', [
      style({ transform: 'translateX(-100%)' }),
      animate(300, style({ transform: 'translateX(0)' }))
    ])
  ]),
  trigger('rightIn', [
    transition(':enter', [
      style({ transform: 'translateX(100%)' }),
      animate(300, style({ transform: 'translateX(0)' }))
    ])
  ]),
  trigger('topIn', [
    transition(':enter', [
      style({ transform: 'translateY(-100%)' }),
      animate(300, style({ transform: 'translateY(0)' }))
    ])
  ]),
];
