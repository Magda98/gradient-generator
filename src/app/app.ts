import { Component } from '@angular/core';
import { CodeSnippetComponent } from './features/code-snippet/code-snippet.component';
import { ShowcaseCardComponent } from './features/showcase-card/showcase-card.component';
import { TextInputComponent } from "./features/text-input/text-input.component";
import { FormsModule } from '@angular/forms';
import { DegreePickerComponent } from "./features/degree-picker/degree-picker.component";

@Component({
  selector: 'gg-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [CodeSnippetComponent, ShowcaseCardComponent, TextInputComponent, FormsModule, DegreePickerComponent],
})
export class App {
  text = ''
}
