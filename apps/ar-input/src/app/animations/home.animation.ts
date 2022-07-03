import { animation, animate, style, trigger, transition, useAnimation } from '@angular/animations';

// export const fadeIn = animation([
//   style({opacity: 0}),
//   animate('700ms', style({opacity: 1}))
// ]);

export const fadeIn = animation([
  style({opacity: 0}),
  animate('{{delay}}', style({opacity: 1}))
],
{
  params: { delay: '700ms'}
});

export const fadeOut = animation([
  animate('{{delay}}', style({opacity: 0}))
], 
{
  params: { delay: '700ms'}
});

export const fadeInOut = trigger('fadeInOut', [
  transition('void => *', useAnimation(fadeIn, {params: { delay: '900ms'}} )),
  transition('* => void', useAnimation(fadeOut))
]);