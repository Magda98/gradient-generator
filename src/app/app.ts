import { Component, computed, signal } from '@angular/core';
import { CodeSnippetComponent } from './features/code-snippet/code-snippet.component';
import { ShowcaseCardComponent } from './features/showcase-card/showcase-card.component';
import { TextInputComponent } from './features/text-input/text-input.component';
import { FormsModule } from '@angular/forms';
import { DegreePickerComponent } from './features/degree-picker/degree-picker.component';
import { ColorListComponent } from './features/color-list/color-list.component';

@Component({
  selector: 'gg-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [
    CodeSnippetComponent,
    ShowcaseCardComponent,
    TextInputComponent,
    FormsModule,
    DegreePickerComponent,
    ColorListComponent,
  ],
})
export class App {
  colors = signal<Record<string, string>>({
    color1: '#9d39e5',
    color2: '#dc454b',
  });
  text = '';
  angle = 135;
  colorsValues = computed(() => {
    return Object.values(this.colors());
  });
}
