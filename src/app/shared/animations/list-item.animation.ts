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
    query(
      ':enter',
      [
        style({ opacity: 0, transform: 'translateY(-15px)' }),
        stagger('100ms', [
          animate('300ms ease-out', style({ opacity: 1, transform: 'none' })),
        ]),
      ],
      { optional: true },
    ),
    query(
      ':leave',
      [
        animate(
          '100ms ease-in',
          style({
            opacity: 0,
            height: '0px',
            paddingTop: 0,
            paddingBottom: 0,
            marginTop: 0,
            marginBottom: 0,
          }),
        ),
      ],
      { optional: true },
    ),
  ]),
]);
