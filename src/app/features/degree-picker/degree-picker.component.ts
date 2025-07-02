import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';

@Component({
  selector: 'gg-degree-picker',
  template: `
    <div class="gg-degree-picker__container">
      <input
        type="range"
        class="gg-degree-picker__slider"
        [min]="min()"
        [max]="max()"
        [value]="value()"
        [style.--value]="(value() - min()) / (max() - min()) * 100 + '%'"
        (input)="onValueChange($event)"
      >
      <div class="gg-degree-picker__value">{{ value() }}</div>
    </div>
  `,
  styleUrls: ['./degree-picker.component.scss']
})
export class DegreePickerComponent {
  min = input(0);
  max = input(360);
  value = model(0);
  valueChange = output<number>();

  onValueChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value.set(Number(target.value));
    this.valueChange.emit(this.value());
  }
}
