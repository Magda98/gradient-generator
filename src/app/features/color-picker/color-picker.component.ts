import {
  ChangeDetectionStrategy,
  Component,
  computed,
  model,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'gg-color-picker',
  imports: [FormsModule],
  template: `
    <div>
      <button
        class="gg-color-picker__trigger"
        [style]="'anchor-name: --' + anchorName()"
        [attr.popovertarget]="anchorName()"
        [style.background-color]="color()"
        [style.color]="textColor()"
      >
        {{ color() }}
      </button>
      <div
        [attr.id]="anchorName()"
        popover
        class="tooltip"
        [style]="'position-anchor: --' + anchorName() + ';'"
      >
        <input
          [attr.aria-label]="'choose color'"
          class="gg-color-picker__input"
          type="text"
          [(ngModel)]="color"
        />
        <div class="gg-color-picker__examples">
          @for (colorExample of colorExamples(); track colorExample) {
            <button
              class="gg-color-picker-button"
              [style.background-color]="colorExample"
              (click)="color.set(colorExample)"
              [attr.aria-label]="'choose color ' + colorExample"
            ></button>
          }
        </div>
      </div>
    </div>
  `,
  styleUrl: './color-picker.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorPickerComponent {
  color = model('');
  protected colorExamples = signal([
    '#142243',
    '#ff1493',
    '#000000',
    '#808080',
    '#800000',
    '#008000',
    '#000080',
    '#808000',
    '#800080',
    '#008080',
    '#1e90ff',
    '#ff4500',
    '#da70d6',
    '#32cd32',
    '#ffa500',
    '#00ced1',
    '#ff6347',
    '#4682b4',
    '#d2691e',
    '#9acd32',
    '#f0e68c',
    '#dda0dd',
    '#add8e6',
    '#f08080',
  ]);
  protected anchorName = signal<string>(`tooltip-${crypto.randomUUID()}`);

  textColor = computed(() => {
    // remove hash
    let hexcolor = this.color().replace('#', '');
    // handle hex shorthand (e.g., "03F"), expand it
    if (hexcolor.length === 3) {
      hexcolor = hexcolor
        .split('')
        .map(function (hex) {
          return hex + hex;
        })
        .join('');
    }

    const r = parseInt(hexcolor.substring(0, 2), 16);
    const g = parseInt(hexcolor.substring(2, 4), 16);
    const b = parseInt(hexcolor.substring(4, 6), 16);

    // calculate luminance
    const getLum = (c: number) => {
      const sRGB = c / 255;
      return sRGB <= 0.03928
        ? sRGB / 12.92
        : Math.pow((sRGB + 0.055) / 1.055, 2.4);
    };
    const backgroundLum =
      0.2126 * getLum(r) + 0.7152 * getLum(g) + 0.0722 * getLum(b);
    // calculate contrast ratio
    const contrastWithWhite = (1 + 0.05) / (backgroundLum + 0.05);
    const contrastWithBlack = (backgroundLum + 0.05) / (0 + 0.05);

    return contrastWithWhite > contrastWithBlack ? '#fff' : '#000';
  });
}
