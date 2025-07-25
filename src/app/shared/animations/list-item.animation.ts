import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';

export const listAnimation = trigger('listAnimation', [
  transition('* => *', [
    // each time the binding value changes
    query(
      ':enter',
      [
        style({ opacity: 0, transform: 'translateY(-16px)' }),
        stagger('100ms', [
          animate('200ms ease-out', style({ opacity: 1, transform: 'none' })),
        ]),
      ],
      { optional: true },
    ),
  ]),
]);
