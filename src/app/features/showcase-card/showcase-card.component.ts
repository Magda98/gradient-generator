import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'gg-showcase-card',
  templateUrl: './showcase-card.component.html',
  styleUrls: ['./showcase-card.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class ShowcaseCardComponent {
  text = input<string>('showcase-card works!');
  colors = input<string[]>([]);
  angle = input<number>(135);
  background = computed(() => {
    return `background: linear-gradient(${this.angle()}deg, ${this.colors().join(
      ', ',
    )});`;
  });
}
