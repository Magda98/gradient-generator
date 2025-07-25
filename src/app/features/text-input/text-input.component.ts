import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'gg-text-input',
  template: `<textarea
    class="gg-text-input"
    [(ngModel)]="value"
    (ngModelChange)="valueChange.emit(value)"
    [attr.aria-label]="'text input'"
  ></textarea>`,
  styleUrl: './text-input.component.scss',
  imports: [CommonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class TextInputComponent implements OnInit {
  valueChange = output<string>();
  value = "I'm just a girl";

  ngOnInit(): void {
    this.valueChange.emit(this.value);
  }
}
