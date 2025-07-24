import {
  ChangeDetectionStrategy,
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  effect,
  ElementRef,
  input,
  viewChild,
} from '@angular/core';
import 'syntax-highlight-element';

interface HtmlSyntaxHighlightElement extends HTMLElement {
  update: () => void;
}

@Component({
  selector: 'gg-code-snippet',
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeSnippetComponent {
  colors = input<string[]>([]);
  angle = input<number>(0);
  code = computed<string>(
    () =>
      `background: linear-gradient(${this.angle()}deg, ${this.colors().join(
        ', '
      )});\n background-clip: text;\n -webkit-text-fill-color: transparent; `
  );
  protected syntaxHighlightElement =
    viewChild<ElementRef<HtmlSyntaxHighlightElement>>('syntaxHighlight');

  constructor() {
    effect(() => {
      this.code();
      setTimeout(() => {
        this.syntaxHighlightElement()?.nativeElement.update?.();
      });
    });
  }
}
